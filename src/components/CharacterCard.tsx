import Image from 'next/image'
import { Character } from './CharactersDashboard'

export default function CardCharacter(props: Character) {
   const { name, status, species, image } = props
   return (
      <div className='max-w-[13rem] rounded-lg bg-gray-900 text-gray-50 shadow-xl m-1 shrink-0'>
         <div className='relative overflow-hidden bg-cover bg-no-repeat'>
            <Image src={image} alt={name} width={200} height={200} priority />
         </div>
         <div className='p-3'>
            <h1 className='text-md font-bold'>{name}</h1>
            <div className='text-xs'>Status: {status}</div>
            <div className='text-xs'>Species: {species}</div>
         </div>
      </div>
   )
}
