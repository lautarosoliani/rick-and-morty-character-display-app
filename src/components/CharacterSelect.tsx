import { Character } from './CardsLayout'
import Image from 'next/image'

type CharacterSelectProps = {
   character: Character | null
   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
   onRemove: () => void
   characterNumber: number
   data: Character[]
}

function CharacterSelect(props: CharacterSelectProps) {
   const { character, onChange, onRemove, characterNumber, data } = props
   return (
      <div className='flex flex-col w-full space-y-5'>
         <h1 className='text-2xl font-bold text-gray-50 text-center mb-2'>Select Character #{characterNumber}</h1>
         <div className='flex flex-col w-full space-y-5'>
            <div className='flex rounded-lg w-full h-96 items-center justify-center'>
               <Image
                  src={character ? character.image : 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'}
                  alt={character ? character.name : 'Default Name'}
                  width={400}
                  height={400}
                  priority
                  className='rounded-full'
               />
            </div>
            <select
               className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 w-full bg-blue-950 text-white'
               onChange={onChange}
               value={character ? character.id.toString() : ''}
            >
               <option value='' disabled>
                  Select Character #{characterNumber}
               </option>
               {data.map((char) => (
                  <option key={char.id} value={char.id}>
                     {char.name}
                  </option>
               ))}
            </select>
            <button className='text-white' onClick={onRemove}>
               Remove Selection
            </button>
         </div>
      </div>
   )
}

export default CharacterSelect
