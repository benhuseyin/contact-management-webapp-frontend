import { createApi } from '@reduxjs/toolkit/query/react'
import type { CurrentUserResponseBody, LoginRequestBody, LoginResponseBody, RegisterRequestBody, RegisterResponseBody } from '@/utils/types'
import { customBaseQuery } from './customBaseQuery'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: customBaseQuery,
    endpoints: (build) => ({
        registerUser: build.mutation<RegisterResponseBody, RegisterRequestBody>({
            query: (body) => ({
                url: '/users/register',
                method: 'POST',
                body,
            }),
        }),
        loginUser: build.mutation<LoginResponseBody, LoginRequestBody>({
            query: (body) => ({
                url: '/users/login',
                method: 'POST',
                body,
            }),
        }),
        getCurrentUser: build.query<CurrentUserResponseBody, void>({
            query: () => ({
                url: "/users/current",
                method: "GET",
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useLazyGetCurrentUserQuery } = userApi
