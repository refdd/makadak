import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const homeApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = getState()?.auth?.token?.accessToken
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
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
        getHomeAll: builder.query({
            query: (name) => ({
                url: `/home`,
                headers: { path: `/auction-vehicles/home/list/all` }
            }),
        }),
        getHomeSale: builder.query({
            query: (name) => ({
                url: `/home`,
                headers: { path: `/auction-vehicles/home/list/sale` }
            }),
        }),
        getHomeAuction: builder.query({
            query: (name) => ({
                url: `/home`,
                headers: { path: `/auction-vehicles/home/list/auction` }
            }),
        }),
        getHomeCategories: builder.query({
            query: () => ({
                url: `/home`,
                headers: { path: '/auction-vehicle-types' }
            })
        }),
        storeInspectionReport: builder.mutation({
            query: (data) => ({
                url: `/home`,
                headers: { path: '/auction-vehicles/upgrades/store' },
                body: {
                    "auctionVehicleId": data.auctionId,
                    "upgrades": "basic_inspection_report"
                },
                method: 'POST'
            })
        })
    }),
    reducerPath: 'homeApi'
});

// Export hooks for usage in functional components
export const {
    useGetHomeAllQuery,
    useGetHomeSaleQuery,
    useGetHomeAuctionQuery,
    useGetHomeCategoriesQuery,
    useStoreInspectionReportMutation,
    util: { getRunningQueriesThunk },
} = homeApi;

// export endpoints for use in SSR
export const { getHomeAll, getHomeSale, getHomeAuction, getHomeCategories, storeInspectionReport } = homeApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = homeApi