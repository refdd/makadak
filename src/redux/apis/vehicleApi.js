import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const vehicleApi = createApi({
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
  tagTypes: [],
  endpoints: (builder) => ({
    getVehicleMake: builder.query({
      query: (data) => {
        return {
          url: "/vehicle/vehicle-makes",
          params: { onlyActive: 1, sortBy: 'mostPopular' }
        };
      },
    }),
    getModelsByMakeId: builder.mutation({
      query: ({ id }) => ({
        url: `/vehicle/vehicle-makes/${id}`,
      }),
    }),
    getVehicleModel: builder.query({
      query: () => ({
        url: `/vehicle/vehicle-models`
      }),
    }),
    getTrimsbyModelId: builder.mutation({
      query: ({ id }) => ({
        url: `/vehicle/vehicle-models/${id}`
      }),
    }),
    getVehicleTrims: builder.query({
      query: () => ({
        url: `/vehicle/vehicle-trims/`,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      }),
    }),
    getVehicleTrimwithid: builder.query({
      query: (id) => ({
        url: `/vehicle-trims`,
        params: id,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      }),
    }),
  }),
  reducerPath: "vehicleApi",
});

export const {
  useGetVehicleMakeQuery,
  useGetModelsByMakeIdMutation,
  useGetVehicleModelQuery,
  useGetTrimsbyModelIdMutation,
  useGetVehicleTrimsQuery,

  useGetVehicleTrimwithidQuery,
  util: { getRunningQueriesThunk },
} = vehicleApi;

export const {
  getVehicleMake,
  getModelsByMakeId,
  queryVehicleTrims,
  getTrimsbyModelId,
  getVehicleTrimwithid,
  getVehicleModel,
} = vehicleApi.endpoints;

export const { endpoints, reducerPath, reducer, middleware } = vehicleApi;
