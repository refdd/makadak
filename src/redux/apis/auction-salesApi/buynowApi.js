import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const auctionSaleBuyNowApi = createApi({
  reducerPath: "auctionSaleBuyNow",
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
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    lockBuy: builder.mutation({
      query(auctionVehicleId) {
        return {
          url: `auction-vehicles/buy-now/lock?auctionVehicleId=${auctionVehicleId}`,
          method: "POST"
        };
      },
    }),

    buyNowPreview: builder.mutation({
      query(arg) {

        return {
          url: `auction-vehicles/preview-buy-now?${arg?.params}`,
          method: "POST",
          body: arg?.body
        };
      },
    }),

    store: builder.mutation({
      query(data) {
        return {
          url: `auction-vehicles/buy-now/?${data.params}`,
          method: "POST",
          body:data.body
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useLockBuyMutation,
  useBuyNowPreviewMutation,
  useStoreMutation,
  util: { getRunningQueriesThunk },
} = auctionSaleBuyNowApi;

// export endpoints for use in SSR
export const { store, buyNowPreview, lockBuy } = auctionSaleBuyNowApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } =
  auctionSaleBuyNowApi;
