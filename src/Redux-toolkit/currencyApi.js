import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const currencyApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ' https://api.privatbank.ua/p24api'
    }),
    endpoints: builder => ({
        fetchCurrency: builder.query({
            query: () => `/pubinfo?json&exchange&coursid=5`
        }),
    }),
})

export const { useFetchCurrencyQuery } = currencyApi;

