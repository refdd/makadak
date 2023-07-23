import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const myActivityApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = getState()?.auth?.token?.accessToken
            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`)
            }
            return headers
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE)
            return action.payload[reducerPath];
    },
    tagTypes: [],
    endpoints: (builder) => ({
        getActivity: builder.query({
            query: () => ({
                url: "/auction-search?buyerAndBuyNowUserId=273&type=ended"
            }),
        }),
        getActivityByType: builder.query({
            query: (data) => ({
                url: `/auction-search?buyerAndBuyNowUserId=${data.userId}&saleType=${data.type}`
            }),
        }),
        getUserOffersActivity: builder.query({
            query: (data) => ({
                url: data.seller ? `/auction-sale/offers-List?userOffers=1` : `/auction-sale/offers-List?auctionVehicleId=${data.auctionVehicleId}`
            })
        })
    }),
    reducerPath: 'myActivityApi',
});

export const {
    useGetActivityQuery,
    useGetActivityByTypeQuery,
    useGetUserOffersActivityQuery,
    util: { getRunningQueriesThunk },
} = myActivityApi;




export const { getActivity, getActivityByType, getUserOffersActivity } = myActivityApi.endpoints;

export const { endpoints, reducerPath, reducer, middleware } = myActivityApi;
