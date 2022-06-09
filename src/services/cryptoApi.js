import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ebf597c0d9msh75d9a56ef456712p19ccf8jsn677e0f798bae',
    'X-RapidAPI-Host': 'crypto-ranking-data.p.rapidapi.com'
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