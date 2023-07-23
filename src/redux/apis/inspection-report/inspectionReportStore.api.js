import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const inspectionReportApi = createApi({
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
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    inspectionReportStore: builder.mutation({
      query: (auctionVehicleId) => ({
        url: `/inspection-report/store?auctionVehicleId=${auctionVehicleId}`,
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}` },
      }),
      invalidatesTags: ['inspectionReport'],
    })
  }),
  reducerPath: 'inspectionReportApi',
});

export const {
  useInspectionReportStoreMutation,
  util: { getRunningQueriesThunk },
} = inspectionReportApi;

export const { inspectionReportStore } = inspectionReportApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = inspectionReportApi;
