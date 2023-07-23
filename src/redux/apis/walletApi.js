import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const walletApi = createApi({
  reducerPath: "wallet",

  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState()?.auth?.token?.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }
      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getWithdrawWallet: builder.query({
      query: () => {
        return {
          url: "wallet/withdraw-list",
        };
      },
    }),

    getMinimumDepositAmount: builder.query({
      query: () => {
        return {
          url: "wallet/minimum-deposit-amount",
        };
      },
    }),

    getProfileAmount: builder.query({
      query: () => ({
        url: `profile`,
        // headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` }
      }),
    }),

    requestWithdraw: builder.mutation({
      query(body) {
        return {
          url: `wallet/request-withdraw`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetWithdrawWalletQuery,
  useGetMinimumDepositAmountQuery,
  useRequestWithdrawMutation,
  useGetProfileAmountQuery,
  util: { getRunningQueriesThunk },
} = walletApi;

// export endpoints for use in SSR
export const {
  getWithdrawWallet,
  getMinimumDepositAmount,
  requestWithdraw,
  getProfileAmount,
} = walletApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = walletApi;
