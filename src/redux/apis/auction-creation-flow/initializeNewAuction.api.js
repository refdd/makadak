import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const initializeNewAuctionApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    initializeNewAuction: builder.mutation({
      query: ({ optionalQuery1, optionalQuery2 }) => {
        const params = [];

        if (optionalQuery1 !== null && optionalQuery1 !== undefined) {
          params.push(`optionalQuery1=${optionalQuery1}`);
        }

        if (optionalQuery2 !== null && optionalQuery2 !== undefined) {
          params.push(`optionalQuery2=${optionalQuery2}`);
        }

        const queryString = params.join("&");

        return {
          url: `initializeNewAuction${queryString ? `?${queryString}` : ""}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          },
        };
      },
    }),
  }),
  reducerPath: "initializeNewAuctionApi",
});

export const {
  useInitializeNewAuctionMutation,
  util: { getRunningQueriesThunk },
} = initializeNewAuctionApi;

export const { initializeNewAuction } = initializeNewAuctionApi.endpoints;
export const {
  endpoints,
  reducerPath,
  reducer,
  middleware,
} = initializeNewAuctionApi;
