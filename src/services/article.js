import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() La función codifica caracteres especiales que pueden estar presentes en los valores de los parámetros
            // Si no codificamos adecuadamente estos caracteres, pueden ser interpretados incorrectamente por el servidor y causar errores o comportamientos inesperados. Así es como surge ese error en RTK.
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3&lang=es`,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;