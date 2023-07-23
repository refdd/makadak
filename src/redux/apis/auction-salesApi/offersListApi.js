import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/`;
export const auctionSaleOffersApis = createApi({
  reducerPath: "auctionSaleOffers",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getOffersList: builder.query({
      query: (arg) => ({
        url: "auction-sale/offers-list/",
        params: arg,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetOffersListQuery,
  util: { getRunningQueriesThunk },
} = auctionSaleOffersApis;

// export endpoints for use in SSR
export const { getOffersList } = auctionSaleOffersApis.endpoints;
export const { endpoints, reducerPath, reducer, middleware } =
  auctionSaleOffersApis;
