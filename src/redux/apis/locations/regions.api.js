import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";

export const regionsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) return action.payload[reducerPath];
    },
    tagTypes: [],
    endpoints: (builder) => ({
        getRegionByCountry: builder.query({
            query: ({countryId}) => {
                const stringParams = new URLSearchParams({countryId}).toString();
                const headers = {};

                if (process.env.NEXT_PUBLIC_ACCESS_TOKEN) {
                    headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
                }
                return {
                    url: `locations/region?${stringParams}`,
                    method: "GET",
                    headers,
                };
            },
        }),
    }),
    reducerPath: "regionsApi",
});

export const {useGetRegionByCountryQuery, util: {getRunningQueriesThunk}} = regionsApi;

export const {getRegionByCountry} = regionsApi.endpoints;
export const {endpoints, reducerPath, reducer, middleware} = regionsApi;
