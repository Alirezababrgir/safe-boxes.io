import { configureStore } from "@reduxjs/toolkit";//save Slice in store by name
import { apiSlice } from "../api/apiSlice";
export const Store = configureStore({
    reducer: {
       // blogs: Slicereducer,
       // users: UserSlice,
        [apiSlice.reducerPath]: apiSlice.reducer //save catch data in ui by api pathname => inject reducer name on slice in store (RTK QUERY way)
    },
    middleware: GetDefaultMiddleware => GetDefaultMiddleware().concat(apiSlice.middleware) //concat apislice middleware to defualt middleware (RTK QUERY way)
});
