import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const chatApi = createApi({
    reducerPath: "chatApi",

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = getState()?.auth?.token?.accessToken;
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
            }
            return headers
        },

    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) return action.payload[reducerPath];
    },
    tagTypes: ['Message', 'Inbox', 'Messages'],
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (data) => {
                return {
                    url: '/chat/message/send',
                    body: JSON.stringify({
                        type: "message",
                        deviceId: "sdfasdfasdfasdf",
                        chatInboxId: data.inboxId,
                        message: data.message
                    }),
                    headers: { "Content-Type": "application/json" },
                    method: 'POST'
                }
            },
            transformErrorResponse: (response, meta, arg) => response.data,
            providesTags: ['Message'],
            invalidatesTags: ['Messages', 'Inbox']
        }),
        getMessages: builder.query({
            query: (inboxId) => {
                return {
                    url: `/chat/inbox/${inboxId}/get?deviceId=blablabal`,
                    method: 'GET'
                }
            },
            transformErrorResponse: (response, meta, arg) => response.data,
            providesTags: ['Messages']
        }),
        getInboxes: builder.query({
            query: () => {
                return {
                    url: '/chat/inbox/get',
                    method: 'GET'
                }
            },
            providesTags: ['Inbox']
        }),
        initiateSupportChat: builder.mutation({
            query: (title) => {
                return {
                    url: '/chat/initiate-chat',
                    method: 'POST',
                    body: {
                        title: title,
                        supportChat: true,
                        auctionVehicleId: 0
                    }
                }
            }
        }),
        getTotalUnreadChat: builder.query({
            query: () => {
                return {
                    url: '/chat/inbox/total-unread',
                    method: 'GET'
                }
            }
        })
    }),
});


export const {
    useSendMessageMutation,
    useGetInboxesQuery,
    useGetMessagesQuery,
    useInitiateSupportChatMutation,
    useGetTotalUnreadChatQuery,
    util: { getRunningQueriesThunk, getRunningMutationsThunk },
} = chatApi;


export const {
    sendMessage,
    getInboxes,
    getMessages,
    initiateSupportChat,
    getTotalUnreadChat,
} = chatApi.endpoints;
export const { endpoints, reducerPath, reducer, middleware } = chatApi;
