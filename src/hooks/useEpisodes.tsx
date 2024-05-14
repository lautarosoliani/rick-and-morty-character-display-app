import { useQueries, UseQueryResult } from '@tanstack/react-query'

interface Episode {
   id: number
   name: string
}

const fetchEpisode = async (url: string): Promise<Episode> => {
   const response = await fetch(url)
   if (!response.ok) {
      throw new Error('Network response was not ok')
   }
   return response.json()
}

export function useEpisodes(episodeUrls: string[]): UseQueryResult<Episode, Error>[] {
   return useQueries({
      queries: episodeUrls.map((url) => ({
         queryKey: ['episode', url],
         queryFn: () => fetchEpisode(url),
      })),
   })
}
