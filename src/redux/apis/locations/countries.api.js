import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => {
        return {
          url: `/locations/countries`,
          method: "GET"
        };
      },
    }),
  }),
  reducerPath: "countriesApi",
});

export const { useGetCountriesQuery , util: { getRunningQueriesThunk } } = countriesApi;

export const { getCountries } = countriesApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = countriesApi;
