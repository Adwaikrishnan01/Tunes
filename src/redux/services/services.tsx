import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Track } from '../.././types/types'

// Define a service using a base URL and expected endpoints
export const spotifyApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://spotify23.p.rapidapi.com/' }),
  endpoints: (builder) => ({
    getTracksById: builder.query<Track, string>({
      query: (Id) => `${Id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTracksByIdQuery } = spotifyApi