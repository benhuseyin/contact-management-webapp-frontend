import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/user";
import { userApi } from '@/services/user';
import { contactApi } from '@/services/contact';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(contactApi.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
