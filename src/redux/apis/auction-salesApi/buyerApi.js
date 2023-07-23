import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const auctioSalesBuyerApis = createApi({
  reducerPath: "auctioSalesBuyer",

  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }
      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    makeOffer: builder.mutation({
      query(body) {
        return {
          url: `/auction-sale/buyer/make-offer`,
          method: "POST",
          body: body,
        };
      },
    }),

    withdrawOffer: builder.mutation({
      query(body) {
        return {
          url: `/auction-sale/buyer/withdraw-offer`,
          method: "POST",
          body,
        };
      },
    }),

    abandonOffer: builder.mutation({
      query(body) {
        return {
          url: `/auction-sale/buyer/abandon-offer`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useWithdrawOfferMutation,
  useMakeOfferMutation,
  useAbandonOfferMutation,
  util: { getRunningQueriesThunk },
} = auctioSalesBuyerApis;

// export endpoints for use in SSR
export const { makeOffer, withdrawOffer, abandonOffer } =
  auctioSalesBuyerApis.endpoints;
export const { endpoints, reducerPath, reducer, middleware } =
  auctioSalesBuyerApis;
