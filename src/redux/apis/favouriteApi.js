import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
export const favoritesApi = createApi({

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
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: ['Favourite'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => ({
        url: `/favourites`
      }),
      providesTags: ['Favourite']
    }),

    addToFavorites: builder.mutation({
      query: (auctionId) => ({
        url: `/favourites/addToFavorites`,
        method: 'POST',
        body: { auctionId: auctionId },
      }),
      invalidatesTags: ['Favourite']
    }),
    removeFromFavorites: builder.mutation({
      query: (auctionId) => ({
        url: `/favourites/removeFromFavorites`,
        method: 'POST',
        body: { auctionId: auctionId },
      }),
      invalidatesTags: ['Favourite']
    }),
  }),
  reducerPath: 'favoritesApi',
})

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  util: { getRunningQueriesThunk },
} = favoritesApi

export const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} = favoritesApi.endpoints

export const { endpoints, reducerPath, reducer, middleware } = favoritesApi;
