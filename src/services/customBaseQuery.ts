import { fetchBaseQuery, } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { BackendErrorResponse } from "@/utils/types";
import type { RootState } from "@/app/store";
// orijinal baseQuery
const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/users/",
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState; // redux state
        const token = state.user.token;       // redux persist ile saklanan token
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
})
// wrapper baseQuery 
export const customBaseQuery: BaseQueryFn<any, unknown, BackendErrorResponse> = async (
    args,
    api,
    extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    if ("error" in result && result.error) {
        const err = result.error as BackendErrorResponse;
        return {
            error: { data: (err.data as BackendErrorResponse["data"]) ?? { title: err?.data?.title, message: err.data.message, }, status: String(err.status), },
        };
    } return result;
};