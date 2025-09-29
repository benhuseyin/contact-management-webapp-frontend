import { createApi } from '@reduxjs/toolkit/query/react'
import type { CreateContactRequestBody, CreateContactResponseBody, GetContactResponseBody, LoginRequestBody, LoginResponseBody } from '@/utils/types'
import { customBaseQuery } from './customBaseQuery'

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: customBaseQuery,
    endpoints: (build) => ({
        createContact: build.mutation<CreateContactResponseBody, CreateContactRequestBody>({
            query: (body) => ({
                url: '/contacts/',
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
        getContacts: build.query<GetContactResponseBody, void>({
            query: () => ({
                url: "/contacts/",
                method: "GET",
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateContactMutation, useLoginUserMutation, useLazyGetContactsQuery } = contactApi
