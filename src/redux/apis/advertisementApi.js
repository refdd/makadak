import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { stringify } from 'querystring'

export const advertisementApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath]
  },
  tagTypes: [],
  endpoints: (builder) => {
    return {
      getAdvertisementCategories: builder.query({
        query: (arg) => ({
          url: `advertisement/`,
          params: arg?.params,
        }),
      }),

      getAdvertisementList: builder.query({
        query: (arg) => ({
          url: `advertisement/list`,
          params: arg,
        }),
      }),
    }
  },
  reducerPath: 'advertisementApi',
})

// Export hooks for usage in functional components
export const {
  useGetAdvertisementCategoriesQuery,
  useGetAdvertisementListQuery,
  util: { getRunningQueriesThunk },
} = advertisementApi

// export endpoints for use in SSR
export const {
  getAdvertisementCategories,
  getAdvertisementList,
} = advertisementApi.endpoints
export const { endpoints, reducerPath, reducer, middleware } = advertisementApi
