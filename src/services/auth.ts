import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RegisterRequestBody, RegisterResponseBody } from '@/utils/types'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api/users/' }),
    endpoints: (build) => ({
        registerUser: build.mutation<RegisterResponseBody, RegisterRequestBody>({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation } = authApi
