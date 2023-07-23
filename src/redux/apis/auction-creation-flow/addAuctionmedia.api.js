
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const addAuctionMediaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    addMediaToAuction: builder.mutation({
      query: ({ auctionVehicleId, mediaPhoto, photoType }) => {
        const formData = new FormData();
        formData.append("mediaPhoto", mediaPhoto);
        formData.append("photoType", photoType);

        return {
          url: `auction-vehicles/${auctionVehicleId}/upload-media`,
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          },
        };
      },
    }),
  }),
  reducerPath: "addAuctionMedia",
});

export const {
  useAddMediaToAuctionMutation,
  util: { getRunningQueriesThunk },
} = addAuctionMediaApi;

export const { addMediaToAuction } = addAuctionMediaApi.endpoints;
export const {
  endpoints,
  reducerPath,
  reducer,
  middleware,
} = addAuctionMediaApi;
