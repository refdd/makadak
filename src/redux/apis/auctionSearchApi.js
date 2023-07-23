import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const auctionSearch = createApi({
  reducerPath: "auctionSearch",

  baseQuery: fetchBaseQuery({
    baseUrl: 'api',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => {
    return {
      getAuctionFilter: builder.mutation({
        query: (arg) => {
          return {
            url: `/auction-search`,
            params: arg,
          };
        },
      }),

      getAuctionSearchByLot: builder.mutation({
        query: (arg) => {
          return {
            url: `/auction-search/search-by-lot/${arg?.id}`,
            params: arg?.params,
          };
        },
      }),
    };
  },
});

// Export hooks for usage in functional components
export const {
  useGetAuctionFilterMutation,
  useGetAuctionSearchByLotMutation,
  util: { getRunningQueriesThunk },
} = auctionSearch;

// export endpoints for use in SSR
export const {
  getAuctionFilter,
  getAuctionSearchByLot,
} = auctionSearch.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = auctionSearch;
