import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const watchlistsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = getState()?.auth?.token?.accessToken
            // If we have a token set in state, let's assume that we should be passing it.
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
        getWatchlists: builder.query({
            query: () => ({
                url: "/profile/watchlists"
            }),
        }),
        addWatchlist: builder.mutation({
            query: (data) => {
                const filters = new URLSearchParams(data).toString();
                return {
                    url: `/profile/watchlists?${filters}`,
                    method: 'POST'
                }
            },
        }),
        getConfigs: builder.query({
            query: () => ({
                url: '/configs',
                method: 'GET'
            })
        })
    }),
    reducerPath: 'watchlistsApi',
});

export const {
    useGetWatchlistsQuery,
    useGetConfigsQuery,
    useAddWatchlistMutation,
    util: { getRunningQueriesThunk },
} = watchlistsApi;


export const { getWatchlists, getConfigs, addWatchlist } = watchlistsApi.endpoints;

export const { endpoints, reducerPath, reducer, middleware } = watchlistsApi.reducer;
