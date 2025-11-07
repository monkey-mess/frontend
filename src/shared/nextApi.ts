import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nextApi = createApi({
    reducerPath: "nextApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: () => ({}),
});
