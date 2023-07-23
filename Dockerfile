# Stage 1: Install dependencies only when needed
FROM node:18.12.1-alpine AS runner

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY yarn.lock* ./
RUN yarn install --ignore-scripts --verbose


RUN rm -rf node_modules/sharp
ENV SHARP_IGNORE_GLOBAL_LIBVIPS 1
RUN yarn add --arch=x64 --platform=linux --libc=glibc --verbose --force sharp@0.31.2


COPY --from=runner /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=runner /app/public ./public
COPY --from=runner --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=runner --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=runner /app/.env.example .env

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
