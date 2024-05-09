import Image from 'next/image'
import { Character } from './CharactersDashboard'
import { Skeleton } from '@nextui-org/react'

export default function CharacterCard(props: Character) {
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

export function CharacterCardSkeleton() {
   return (
      <div className='max-w-[13rem] rounded-lg bg-gray-900 text-gray-50 shadow-xl m-1 shrink-0'>
         <div className='relative overflow-hidden bg-cover bg-no-repeat'>
            <Skeleton className='skeleton-shine' style={{ height: '220px', width: '200px' }} />
         </div>
         <div className='space-y-2 p-4'>
            <Skeleton className='skeleton-shine rounded-lg' style={{ height: '1rem', width: '60%' }} />
            <Skeleton className='skeleton-shine rounded-lg' style={{ height: '0.5rem', width: '60%' }} />
            <Skeleton className='skeleton-shine rounded-lg' style={{ height: '0.5rem', width: '40%' }} />
         </div>
      </div>
   )
}
