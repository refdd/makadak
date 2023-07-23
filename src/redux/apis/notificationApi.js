import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const notificationApi = createApi({
  reducerPath: 'notificationApi',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
      return headers
    },

  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath]
  },
  tagTypes: ['Notifications', 'NotificationsPrefs', 'NotificationsCount'],
  endpoints: (builder) => {
    return {
      getNotifications: builder.query({
        query: (status) => {
          return {
            url: `/notifications/push-messages?${status ? 'status=' + status : ''}`,
            method: 'GET'
          }
        },
        providesTags: ['Notifications']
      }),

      changeNotificationStatus: builder.mutation({
        query: (id) => {
          return {
            url: `/notifications/push-messages/${id}`,
            method: 'PATCH',
            body: { status: 'read' },
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              "N-Meta": "web;local",
              "X-Localization": "en",
              "Content-Type": "application/x-www-form-urlencoded"
            },
          }
        },
        invalidatesTags: ['NotificationsCount', 'Notifications']
      }),
      getUnreadCount: builder.query({
        query: (arg) => {
          return {
            url: 'notifications/push-messages/unread-count',
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          }
        },
        providesTags: ['NotificationsCount']
      }),

      postDeviceNotification: builder.mutation({
        query: (deviceData) => ({
          url: '/notifications/devices',
          method: 'POST',
          body: deviceData,
        }),
      }),
      removeDevice: builder.mutation({
        query: (id) => ({
          url: `/notifications/devices/${id}`,
          method: 'delete',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }),
      }),
      getPreferences: builder.query({
        query: () => ({
          url: '/notifications/preferences',
          headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
        }),
        providesTags: ['NotificationsPrefs']
      }),
      updateNotificationPreference: builder.mutation({
        query: (data) => ({
          url: '/notifications/preferences',
          method: 'POST',
          body: {
            channel: "push-notification",
            opted: Number(data.checked),
            category: data.category
          },
        }),
        invalidatesTags: ['NotificationsPrefs']
      }),
    }
  },
})

// Export hooks for usage in functional components
export const {
  useGetNotificationsQuery,
  useChangeNotificationStatusMutation,
  useGetUnreadCountQuery,
  usePostDeviceNotificationMutation,
  useRemoveDeviceMutation,
  useGetPreferencesQuery,
  useUpdateNotificationPreferenceMutation,
  util: { getRunningQueriesThunk },
} = notificationApi

// export endpoints for use in SSR
export const {
  getNotifications,
  changeNotificationStatus,
  getUnreadCount,
  postDeviceNotification,
  removeDevice,
  updateNotificationPreference,
} = notificationApi.endpoints
export const { endpoints, reducerPath, reducer, middleware } = notificationApi
