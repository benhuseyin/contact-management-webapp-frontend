import { createApi } from '@reduxjs/toolkit/query/react'
import type { CurrentRequestBody, CurrentResponseBody, LoginRequestBody, LoginResponseBody, RegisterRequestBody, RegisterResponseBody } from '@/utils/types'
import { customBaseQuery } from './customBaseQuery'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customBaseQuery,
    endpoints: (build) => ({
        registerUser: build.mutation<RegisterResponseBody, RegisterRequestBody>({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
        }),
        loginUser: build.mutation<LoginResponseBody, LoginRequestBody>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),
        getCurrentUser: build.query<CurrentResponseBody, void>({
            query: () => ({
                url: "current",
                method: "GET",
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useLazyGetCurrentUserQuery } = authApi
