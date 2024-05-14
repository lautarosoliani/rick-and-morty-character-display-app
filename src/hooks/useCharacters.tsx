import { keepPreviousData, useQuery } from '@tanstack/react-query'

const fetchCharacters = async (page: number) => {
   const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
   if (!response.ok) {
      throw new Error('Network response was not ok')
   }
   const json = await response.json()
   return json
}

export function useCharacters(page = 1) {
   return useQuery({
      queryKey: ['characters', page],
      queryFn: () => fetchCharacters(page),
      placeholderData: keepPreviousData,
   })
}
