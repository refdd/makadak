import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const auctioSalesSellerApis = createApi({
  reducerPath: "auctioSalesSeller",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auction-sale',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }
      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: ['Offers'],
  endpoints: (builder) => ({
    acceptHighestOffer: builder.mutation({
      query(body) {
        return {
          url: `/seller/accept-highest-offer-on-listing`,
          method: "POST",
          body,
        };
      },
    }),

    acceptSpecificOffer: builder.mutation({
      query(body) {
        return {
          url: `/seller`,
          headers: {path: '/accept-offer'},
          method: "POST",
          body,
        };
      },
    }),

    counterOffer: builder.mutation({
      query(data) {
        return {
          url: `/seller`,
          method: "POST",
          headers: { path: '/counter-offer' },
          body: {
            "auctionVehicleSaleOfferId": data.id,
            "counterOfferAmount": data.amount,
            "currencyCode": "SAR"
        },
        };
      },
    }),

    declineOffer: builder.mutation({
      query(body) {
        return {
          url: `/seller`,
          method: "POST",
          headers: { path: '/decline-offer' },
          body,
        };
      },
      invalidatesTags: ['Offers']
    }),
    getUserOffers: builder.query({
      query: (data) => ({
        url: `/offers-List?auctionVehicleId=${data.auctionVehicleId}`
      }),
      providesTags: ['Offers']
    })
  }),
});


export const {
  useAcceptHighestOfferMutation,
  useCounterOfferMutation,
  useAcceptSpecificOfferMutation,
  useDeclineOfferMutation,
  useGetUserOffersQuery,
  util: { getRunningQueriesThunk },
} = auctioSalesSellerApis;


export const {
  declineOffer,
  counterOffer,
  acceptSpecificOffer,
  acceptHighestOffer,
  getUserOffers,
} = auctioSalesSellerApis.endpoints;
export const { endpoints, reducerPath, reducer, middleware } =
  auctioSalesSellerApis;
