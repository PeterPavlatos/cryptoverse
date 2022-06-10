import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': ''
}
const baseUrl = 'https://crypto-ranking-data.p.rapidapi.com/market/list/1/100';

const creatRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ()=> creatRequest('/exchanges')
        })
    })
});
