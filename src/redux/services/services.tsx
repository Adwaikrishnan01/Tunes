import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Track } from '../.././types/types'
import {Genre} from '../.././types/genre'

// Define a service using a base URL and expected endpoints
export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core.p.rapidapi.com',
  prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key', 'ecae6381f9msh677dc059bdf6a5ap1dc193jsn4184f2cc7b93');
     
    return headers;
  }, }),
  endpoints: (builder) => ({
    getTrackById: builder.query<Track, string>({query: (Id) => `${Id}`, }),
    // getGenre:builder.query<Genre,string>({query:'/genre_view/'})
    getGenre:builder.query<string,void>({query:()=>'/v1/charts/genre-world'})
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTrackByIdQuery,
useGetGenreQuery } = shazamApi;