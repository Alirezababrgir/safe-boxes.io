import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    tagTypes: ["BROKER"],
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://services.safe-boxes.io/services" }),
    endpoints: builder => ({
        PostToken: builder.mutation({
            query: (requestData) => ({
                url: `/authenticate/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        PostBrokerInfo: builder.mutation({
            query: (requestData) => ({
                url: `/get-broker-info/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        RegisterBrokerId: builder.mutation({
            query: (requestData) => ({
                url: `/register-broker-id/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        CheckToken: builder.mutation({
            query: (requestData) => ({
                url: `/check-token/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        RefreshToken: builder.mutation({
            query: (requestData) => ({
                url: `/refresh-token/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        LogOut: builder.mutation({
            query: (requestData) => ({
                url: `/logout/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        ReffralInfo: builder.mutation({
            query: (requestData) => ({
                url: `/get-referral-broker-info/`,
                method: "POST", // http method POST
                body: requestData
            })//, invalidatesTags: ["BROKER"]
        }),
        GetTime: builder.mutation({
            query: (requestData) => ({
                url: `/get-time/`,
                method: "POST", // http method POST
                body: requestData
            }), invalidatesTags: ["BROKER"]
        })
    })
})
export const { useGetTimeMutation, useReffralInfoMutation, usePostTokenMutation, usePostBrokerInfoMutation, useRegisterBrokerIdMutation, useCheckTokenMutation, useRefreshTokenMutation, useLogOutMutation } = apiSlice; //Select endpoints and create hook