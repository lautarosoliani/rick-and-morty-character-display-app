import Image from 'next/image'

export default function CardCharacter(props: any) {
   const { name, status, species, image } = props
   return (
      <div className='max-w-[18rem] rounded-lg bg-gray-900 text-gray-50 shadow-xl m-4 shrink-0'>
         <div className='relative overflow-hidden bg-cover bg-no-repeat'>
            <Image src={image} alt={name} width={400} height={400} priority />
         </div>
         <div className='p-6'>
            <h1 className='text-2xl font-bold text-gray-50'>{name}</h1>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
         </div>
      </div>
   )
}
