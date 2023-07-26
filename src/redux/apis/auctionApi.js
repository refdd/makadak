import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
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
    getAuctionDetailsbyID: builder.query({
      query: (arg) => {
        return {
          url: `auction/${arg?.id}`,
          params: arg?.params,
        };
      },
    }),

    getAuctionBySellerId: builder.query({
      query: (arg) => {
        return {
          url: `auction/seller?seller=${arg.sellerId}&page=1&type=active&saleType=all`
        };
      },
    }),

    getAuctionHighestBid: builder.query({
      query: ({ auctionVehicleId }) => {
        return {
          url: `auction/highest-bid/${auctionVehicleId}`,
        };
      },
    }),

    getAuctionTimeRemaining: builder.query({
      query: ({ id }) => {
        return {
          url: `auction/time-remaining/${id}`,
        };
      },
    }),

    getAuctionCountByTypeId: builder.query({
      query: (arg) => {
        return {
          url: `auction/count-by-type`,
          params: arg?.params,
        };
      },
    }),

    getAuctionDeliveryRates: builder.query({
      query: ({ rates }) => {
        return {
          url: `auction/delivery-rates/${rates}`,
        };
      },
    }),

    getAuctionDelivery: builder.query({
      query: (arg) => {
        return {
          url: `auction/delivery/${arg?.auctionVehicleId}/${arg?.latLng}`,
        };
      },
    }),
  }),
});

export const {
  useGetAuctionDetailsbyIDQuery,
  useGetAuctionBySellerIdQuery,
  useGetAuctionHighestBidQuery,
  useGetAuctionTimeRemainingQuery,
  useGetAuctionCountByTypeIdQuery,
  useGetAuctionDeliveryRatesQuery,
  useGetAuctionDeliveryQuery,
  util: { getRunningQueriesThunk },
} = auctionApi;

export const {
  getAuctionDetailsbyID,
  getAuctionBySellerId,
  getAuctionHighestBid,
  getAuctionTimeRemaining,
  getAuctionCountByTypeId,
  getAuctionDeliveryRates,
  getAuctionDelivery,
} = auctionApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = auctionApi;
