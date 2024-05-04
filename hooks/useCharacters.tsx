import { useQuery } from '@tanstack/react-query'

const fetchCharacters = async () => {
   const response = await fetch('https://rickandmortyapi.com/api/character')
   if (!response.ok) {
      throw new Error('Network response was not ok')
   }
   const json = await response.json()
   return json.results
}

export function useCharacters() {
   return useQuery({
      queryKey: ['characters'],
      queryFn: fetchCharacters,
   })
}
