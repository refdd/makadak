import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const profileApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken;
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
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (token) => {
        return {
          url: `/profile?assignVirtualIban=1`,
          method: 'GET',
          headers: {
            'authorization': token
          }
        }
      },
      providesTags: ['Profile']
    }),
    updateProfile: builder.mutation({
      query: (payload) => {
        const params = Object.entries(payload)
          .filter(([key, value]) => value !== null && value !== '')
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
        return {
          url: `/profile${params.length > 0 ? `?${params}` : ''}`,
          method: 'PATCH'
        };
      },
      invalidatesTags: ['Profile'],
    }),
    deleteProfile: builder.mutation({
      query: (userId) => ({
        url: `/user/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Profile'],
    }),
    getWatchlists: builder.query({
      query: (userId) => ({
        url: `/profile/watchlists`,
        method: 'GET'
      })
    }),

  }),
  reducerPath: 'profileApi',
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
  useGetWatchlistsQuery,
  util: { getRunningQueriesThunk },
} = profileApi;

export const { getProfile, updateProfile, deleteProfile, getWatchlists } = profileApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = profileApi;
