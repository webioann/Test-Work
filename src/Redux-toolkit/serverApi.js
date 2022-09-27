import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api'
    }),
    endpoints: builder => ({
        fetchServerData: builder.query({
            query: (page) => `/users?page=${page}`,
            transformResponse: (respons) => respons.data,
        }),
    }),
})

export const { useLazyFetchServerDataQuery } = serverApi;

