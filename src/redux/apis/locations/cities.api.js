import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const cityByRegionApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getCityByRegion: builder.query({
      query: ({ regionId }) => {
        const stringParams = new URLSearchParams({ regionId }).toString();
        const headers = {};

        if (process.env.NEXT_PUBLIC_ACCESS_TOKEN) {
          headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
        }

        return {
          url: `/locations/cities?${stringParams}`,
          method: "GET",
          headers,
        };
      },
    }),
  }),
  reducerPath: "cityByRegionApi",
});

export const { useGetCityByRegionQuery , util: { getRunningQueriesThunk } } = cityByRegionApi;

export const { getCityByRegion } = cityByRegionApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = cityByRegionApi;
