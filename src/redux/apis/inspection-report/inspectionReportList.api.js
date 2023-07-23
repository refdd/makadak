import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const inspectionReportListApi = createApi({
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
    inspectionReportListings: builder.query({
      query: () => ({
        url: `inspection-report/list?sortBy=createdAt&sortOrder=DESC`,
      }),
      providesTags: ['inspectionReportList'],
    }),
  }),
  reducerPath: 'inspectionReportListApi',
});

export const {
  useInspectionReportListingsQuery,
  util: { getRunningQueriesThunk },
} = inspectionReportListApi;

export const { inspectionReportListings } = inspectionReportListApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = inspectionReportListApi;
