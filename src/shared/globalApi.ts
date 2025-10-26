import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const globalApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api",
    }),
    endpoints: () => ({}),
});
