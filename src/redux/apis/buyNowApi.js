import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/`;
export const buyNowApi = createApi({
  reducerPath: "buynow",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  tagTypes: [],
  endpoints: (builder) => {
    return {
      getBuyNowReview: builder.query({
        query: (arg) => {
          return {
            url: `buy-now/review/`,
            params: arg,
            headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` }
          };
        },
      }),

      getBuyNowFees: builder.query({
        query: (arg) => {
          return {
            url: `buy-now/fees/`,
            params: arg,
            headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` }

          };
        },
      }),
    };
  },
});

// Export hooks for usage in functional components
export const {
  useGetBuyNowReviewQuery,
  useGetBuyNowFeesQuery,
  util: { getRunningQueriesThunk },
} = buyNowApi;

// export endpoints for use in SSR
export const { getBuyNowReview, getBuyNowFees } = buyNowApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = buyNowApi;
