import { JSX, useState } from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import CardCharacter from './CharacterCard'
import { useEpisodes } from '../../hooks/useEpisodes'
import CharacterSelect from './CharacterSelect'
import EpisodeList from './EpisodeList'

export type Character = {
   id: number
   name: string
   status: string
   species: string
   image: string
   episode: string[]
}

function CharactersDashboard() {
   const [page, setPage] = useState(1)
   const { data, error, isLoading } = useCharacters(page)
   const [selectedCharacter1, setSelectedCharacter1] = useState<Character | null>(null)
   const [selectedCharacter2, setSelectedCharacter2] = useState<Character | null>(null)
   const episodesFirstCharacter = useEpisodes(selectedCharacter1 ? selectedCharacter1.episode : [])
   const episodesSecondCharacter = useEpisodes(selectedCharacter2 ? selectedCharacter2.episode : [])

   const sharedEpisodes = useEpisodes(
      selectedCharacter1 && selectedCharacter2
         ? selectedCharacter1.episode.filter((url) => selectedCharacter2.episode.includes(url))
         : []
   )

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>
   if (!data) return <div>No data available</div>

   const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>, characterNumber: number) => {
      const characterId = parseInt(e.target.value, 10)
      const character = data.results.find((char: Character) => char.id === characterId)
      if (characterNumber === 1) {
         setSelectedCharacter1(character)
      } else {
         setSelectedCharacter2(character)
      }
   }

   return (
      <>
         <div className='flex flex-wrap justify-center mt-10'>
            {data.results.map((character: JSX.IntrinsicAttributes & Character) => (
               <CardCharacter key={character.id} {...character} />
            ))}
         </div>
         <div className='flex justify-center mt-4'>
            <button
               className='bg-blue-950 text-white border-2 border-blue-900 hover:bg-blue-800 font-bold py-2 px-4 rounded-l'
               onClick={() => setPage((old) => Math.max(old - 1, 1))}
               disabled={page === 1}
            >
               Previous
            </button>
            <div className='text-white font-bold py-2 px-4 '>{`Page ${page}`}</div>
            <button
               className='bg-blue-950 text-white border-2 border-blue-900 hover:bg-blue-800 font-bold py-2 px-4 rounded-r'
               onClick={() => setPage((old) => (data.info.next ? old + 1 : old))}
               disabled={!data.info.next}
            >
               Next
            </button>
         </div>
         <div className='flex p-10 m-8 space-x-10'>
            <CharacterSelect
               data={data.results}
               character={selectedCharacter1}
               onChange={(e) => handleCharacterChange(e, 1)}
               onRemove={() => setSelectedCharacter1(null)}
               characterNumber={1}
            />
            <CharacterSelect
               data={data.results}
               character={selectedCharacter2}
               onChange={(e) => handleCharacterChange(e, 2)}
               onRemove={() => setSelectedCharacter2(null)}
               characterNumber={2}
            />
         </div>
         <div className='grid grid-cols-3 p-10 m-8 text-white'>
            <EpisodeList
               episodes={
                  episodesFirstCharacter as { data: { name: string } | null; error: Error | null; isLoading: boolean }[]
               }
               title='Character #1 - Only Episodes'
               isVisible={selectedCharacter1 !== null}
            />
            <EpisodeList
               episodes={sharedEpisodes as { data: { name: string } | null; error: Error | null; isLoading: boolean }[]}
               title='Characters #1 & #2 - Shared Episodes'
               isVisible={selectedCharacter1 !== null && selectedCharacter2 !== null}
            />
            <EpisodeList
               episodes={
                  episodesSecondCharacter as {
                     data: { name: string } | null
                     error: Error | null
                     isLoading: boolean
                  }[]
               }
               title='Character #2 - Only Episodes'
               isVisible={selectedCharacter2 !== null}
            />
         </div>
      </>
   )
}

export default CharactersDashboard
