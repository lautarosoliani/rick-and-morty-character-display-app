import { UseQueryResult, keepPreviousData, useQuery } from '@tanstack/react-query'

interface Character {
   id: number
   name: string
   status: string
   species: string
   image: string
}

interface CharactersResponse {
   results: Character[]
   info: {
      count: number
      pages: number
      next: string | null
      prev: string | null
   }
}

const fetchCharacters = async (page: number): Promise<CharactersResponse> => {
   const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
   if (!response.ok) {
      throw new Error('Network response was not ok')
   }
   return response.json()
}

export function useCharacters(page = 1): UseQueryResult<CharactersResponse, Error> {
   return useQuery({
      queryKey: ['characters', page],
      queryFn: () => fetchCharacters(page),
      placeholderData: keepPreviousData,
   })
}
