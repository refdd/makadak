import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const deleteAuctionMediaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    deleteAuctionMedia: builder.mutation({
      query: ({ mediaId }) => ({
        url: `auction-vehicles/${mediaId}/delete-media`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      }),
    }),
  }),
  reducerPath: "deleteAuctionMediaApi",
});

export const {
  useDeleteAuctionMediaMutation,
  util: { getRunningQueriesThunk },
} = deleteAuctionMediaApi;

export const { deleteAuctionMedia } = deleteAuctionMediaApi.endpoints;
export const {
  endpoints,
  reducerPath,
  reducer,
  middleware,
} = deleteAuctionMediaApi;
