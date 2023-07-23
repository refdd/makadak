import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const businessesApi = createApi({
  reducerPath: "businessesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
      return headers
    }
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: ['Listing'],
  endpoints: (builder) => {
    return {
      getBusinessesList: builder.query({
        query: (arg) => {
          return {
            url: `/businesses`,
            params: arg?.params,
          };
        },
      }),

      getFeaturedBusinessList: builder.query({
        query: (arg) => {
          return {
            url: `/businesses/featured-business`,
            params: arg?.params,
          };
        },
      }),

      getBusinessesListPerBusiness: builder.query({
        query: (arg) => {
          return {
            url: `/businesses/listings-per-business`,
            params: arg,
          };
        },
        providesTags: ['Listing']
      }),
    };
  },
});


export const {
  useGetBusinessesListQuery,
  useGetFeaturedBusinessListQuery,
  useGetBusinessesListPerBusinessQuery,
  util: { getRunningQueriesThunk },
} = businessesApi;


export const {
  getBusinessesList,
  getFeaturedBusinessList,
  getBusinessesListPerBusiness,
} = businessesApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = businessesApi;
