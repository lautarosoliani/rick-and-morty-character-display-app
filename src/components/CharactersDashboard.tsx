import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { useEpisodes } from '../hooks/useEpisodes'
import CharacterSelect from './CharacterSelect'
import EpisodeList, { Episodes } from './EpisodeList'
import Pagination from './Pagination'
import CharacterCard, { CharacterCardSkeleton } from './CharacterCard'
import { getUniqueEpisodes, getSharedEpisodes } from '@/utils/episodeUtils'

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
   const episodesFirstCharacter = useEpisodes(getUniqueEpisodes(selectedCharacter1, selectedCharacter2))
   const episodesSecondCharacter = useEpisodes(getUniqueEpisodes(selectedCharacter2, selectedCharacter1))
   const sharedEpisodes = useEpisodes(getSharedEpisodes(selectedCharacter1, selectedCharacter2))

   function renderSkeletons(count: number) {
      return (
         <>
            <div className='flex w-full justify-center mt-10 text-white'>Loading...</div>
            <div className='flex flex-wrap justify-center mt-10 text-white'>
               {Array.from({ length: count }, (_, index) => (
                  <CharacterCardSkeleton key={index} />
               ))}
            </div>
         </>
      )
   }

   if (isLoading) {
      return renderSkeletons(20)
   }
   if (error) return <div>Error: {error.message}</div>
   if (!data || !data.results) return <div>No data available</div>

   const handleCharacterChange = (characterId: string | null, characterNumber: number) => {
      const character = data.results.find((char: Character) => char.id.toString() === characterId)
      if (characterNumber === 1) {
         setSelectedCharacter1(character || null)
      } else {
         setSelectedCharacter2(character || null)
      }
   }

   return (
      <>
         <div className='flex flex-wrap justify-center mt-10'>
            {data.results.map((character: JSX.IntrinsicAttributes & Character) => (
               <CharacterCard key={character.id} {...character} />
            ))}
         </div>
         <Pagination page={page} data={data} setPage={setPage} />
         <div className='flex p-10 m-8 space-x-10'>
            <CharacterSelect
               data={data.results}
               character={selectedCharacter1}
               onChange={(id) => handleCharacterChange(id, 1)}
               onRemove={() => setSelectedCharacter1(null)}
               characterNumber={1}
            />
            <CharacterSelect
               data={data.results}
               character={selectedCharacter2}
               onChange={(id) => handleCharacterChange(id, 2)}
               onRemove={() => setSelectedCharacter2(null)}
               characterNumber={2}
            />
         </div>
         <div className='flex text-center'>
            <div className='grid grid-cols-3 p-10 m-8 text-white w-full'>
               <EpisodeList
                  episodes={episodesFirstCharacter as Episodes}
                  title='Character #1 - Only Episodes'
                  isVisible={selectedCharacter1 !== null}
               />
               <EpisodeList
                  episodes={sharedEpisodes as Episodes}
                  title='Characters #1 & #2 - Shared Episodes'
                  isVisible={selectedCharacter1 !== null && selectedCharacter2 !== null}
               />
               <EpisodeList
                  episodes={episodesSecondCharacter as Episodes}
                  title='Character #2 - Only Episodes'
                  isVisible={selectedCharacter2 !== null}
               />
            </div>
         </div>
      </>
   )
}

export default CharactersDashboard
