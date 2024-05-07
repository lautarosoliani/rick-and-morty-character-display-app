import { useState } from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import CardCharacter from './CardCharacter'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export type Character = {
   id: number
   name: string
   status: string
   species: string
   image: string
}

function CardsLayout() {
   const { data, error, isLoading } = useCharacters()
   const [selectedCharacter1, setSelectedCharacter1] = useState<Character | null>(null)
   const [selectedCharacter2, setSelectedCharacter2] = useState<Character | null>(null)

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>
   if (!data) return <div>No data available</div>

   const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>, characterNumber: number) => {
      const characterId = parseInt(e.target.value, 10)
      const character = data.find((char: Character) => char.id === characterId)
      if (characterNumber === 1) {
         setSelectedCharacter1(character)
      } else {
         setSelectedCharacter2(character)
      }
   }

   return (
      <>
         <div className='flex flex-wrap justify-center'>
            {data.map((character: Character) => (
               <CardCharacter key={character.id} {...character} />
            ))}
         </div>
         <div className='flex p-10 m-8 space-x-10'>
            <div className='flex flex-col w-full space-y-5'>
               <h1 className='text-2xl font-bold text-gray-50 text-center mb-2'>Select Character #1</h1>
               <div className='flex flex-col w-full space-y-5'>
                  <div className='flex rounded-lg w-full h-96 items-center justify-center'>
                     <Image
                        src={
                           selectedCharacter1
                              ? selectedCharacter1.image
                              : 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
                        }
                        alt={selectedCharacter1 ? selectedCharacter1.name : 'Default Name'}
                        width={400}
                        height={400}
                        priority
                        className='rounded-full'
                     />
                  </div>
                  <select
                     className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 w-full bg-blue-950 text-white'
                     onChange={(e) => handleCharacterChange(e, 1)}
                     value={selectedCharacter1 ? selectedCharacter1.id.toString() : ''}
                  >
                     <option value='' disabled>
                        Select Character #1
                     </option>{' '}
                     {data.map((character: Character) => (
                        <option key={character.id} value={character.id}>
                           {character.name}
                        </option>
                     ))}
                  </select>
                  <button className='text-white' onClick={() => setSelectedCharacter1(null)}>
                     Remove Selection
                  </button>
               </div>
            </div>
            <div className='flex flex-col w-full space-y-5'>
               <h1 className='text-2xl font-bold text-gray-50 text-center mb-2'>Select Character #2</h1>
               <div className='flex flex-col w-full space-y-5'>
                  <div className='flex rounded-lg w-full h-96 items-center justify-center'>
                     <Image
                        src={
                           selectedCharacter2
                              ? selectedCharacter2.image
                              : 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
                        }
                        alt={selectedCharacter2 ? selectedCharacter2.name : 'Default Name'}
                        width={400}
                        height={400}
                        priority
                        className='rounded-full'
                     />
                  </div>
                  <select
                     className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 bg-blue-950 text-white'
                     onChange={(e) => handleCharacterChange(e, 2)}
                     value={selectedCharacter2 ? selectedCharacter2.id.toString() : ''}
                  >
                     <option value='' disabled>
                        Select Character #2
                     </option>{' '}
                     {data.map((character: Character) => (
                        <option key={character.id} value={character.id}>
                           {character.name}
                        </option>
                     ))}
                  </select>
                  <button className='text-white' onClick={() => setSelectedCharacter2(null)}>
                     Remove Selection
                  </button>
               </div>
            </div>
         </div>
         <div className='grid grid-cols-3 p-10 m-8 text-white'>
            <div
               className={twMerge(
                  'text-2xl font-bold text-gray-50 text-center mb-2',
                  selectedCharacter1 === null && 'invisible'
               )}
            >
               Character #1 - Only Episodes
            </div>
            <div
               className={twMerge(
                  'text-2xl font-bold text-gray-50 text-center mb-2',
                  (!selectedCharacter1 || !selectedCharacter2) && 'invisible'
               )}
            >
               Characters #1 & #2 - Shared Episodes
            </div>
            <div
               className={twMerge(
                  'text-2xl font-bold text-gray-50 text-center mb-2',
                  selectedCharacter2 === null && 'invisible'
               )}
            >
               Character #2 - Only Episodes
            </div>
         </div>
      </>
   )
}

export default CardsLayout
