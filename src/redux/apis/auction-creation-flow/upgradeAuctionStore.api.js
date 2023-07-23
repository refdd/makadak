import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const storeUpgradesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    storeUpgrades: builder.mutation({
      query: (payload) => ({
        url: "auction-vehicles/upgrades/store",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
  reducerPath: "storeUpgradesApi",
});

export const {
  useStoreUpgradesMutation,
  util: { getRunningQueriesThunk },
} = storeUpgradesApi;

export const { storeUpgrades } = storeUpgradesApi.endpoints;
export const {
  endpoints,
  reducerPath,
  reducer,
  middleware,
} = storeUpgradesApi;
