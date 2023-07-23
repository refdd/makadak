import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const updateAuctionVehicleApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    updateAuctionVehicle: builder.mutation({
      query: ({ auctionVehicleId, payload }) => ({
        url: `auction-vehicles/${auctionVehicleId}`,
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
  reducerPath: "updateAuctionVehicleApi",
});

export const {
  useUpdateAuctionVehicleMutation,
  util: { getRunningQueriesThunk },
} = updateAuctionVehicleApi;

export const { updateAuctionVehicle } = updateAuctionVehicleApi.endpoints;
export const {
  endpoints,
  reducerPath,
  reducer,
  middleware,
} = updateAuctionVehicleApi;
