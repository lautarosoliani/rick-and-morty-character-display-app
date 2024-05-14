import { useQueries } from '@tanstack/react-query'

const fetchEpisode = async (url: string) => {
   const response = await fetch(url)
   if (!response.ok) {
      throw new Error('Network response was not ok')
   }
   return response.json()
}

export function useEpisodes(episodeUrls: string[]) {
   return useQueries({
      queries: episodeUrls.map((url) => ({
         queryKey: ['episode', url],
         queryFn: () => fetchEpisode(url),
      })),
   })
}
