import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const categoryApi = createApi({
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
        getCategoryAuctionsById: builder.query({
            query: (id) => ({
                url: `/category`,
                headers: { path: `/auction-vehicles/home/${id}/list/all` }
            }),
        })
    }),
    reducerPath: 'categoryApi'
});

export const {
    useGetCategoryAuctionsByIdQuery,
    util: { getRunningQueriesThunk },
} = categoryApi;

export const { getCategoryAuctionsById } = categoryApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = categoryApi