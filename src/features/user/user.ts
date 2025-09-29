import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id?: string;
    username?: string;
    email?: string;
    token?: string;
}

interface UserState {
    currentUser: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    currentUser: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // when login/register is success, code which is below will use
        setUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.token = action.payload.token ?? null;
            state.isAuthenticated = true;
        },
        // logout
        clearUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
        // loading state controL
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        // set error message
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
