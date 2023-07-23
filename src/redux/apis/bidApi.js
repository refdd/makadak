import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const bidApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
      return headers
    },

  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath]
  },
  tagTypes: [],
  endpoints: (builder) => {
    return {
      getplaceBidPreview: builder.query({
        query: (data) => ({
          url: `bids/preview/?auctionVehicleId=${data.auctionVehicleId}&auctionedPrice=${data.auctionedPrice}`,
          params: arg,
        }),
      }),

      placeBidwithAutoBid: builder.mutation({
        query: (data) => ({
          url: `/bids?auctionVehicleId=${data.auctionVehicleId}&auctionedPrice=${data.auctionedPrice}&hasMaxBid=1&maxBidAmount=${data.maxBidAmount}&currencyCode=${data.currencyCode}`,
          method: 'POST',
        }),
      }),
      placeBid: builder.mutation({
        query: (data) => ({
          url: `/bids?auctionVehicleId=${data.auctionVehicleId}&auctionedPrice=${data.auctionedPrice}`,
          method: 'POST',
        }),
      }),
    }
  },
  reducerPath: 'bidApi',
})

// Export hooks for usage in functional components
export const {
  useGetPlaceBidPreviewQuery,
  usePlaceBidwithAutoBidMutation,
  usePlaceBidMutation,
  util: { getRunningQueriesThunk },
} = bidApi

// export endpoints for use in SSR
export const {
  getPlaceBidPreview,
  PlaceBidwithAutoBid,
  PlaceBid,
} = bidApi.endpoints
export const { endpoints, reducerPath, reducer, middleware } = bidApi
