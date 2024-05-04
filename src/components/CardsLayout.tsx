import { useCharacters } from '../../hooks/useCharacters'
import CardCharacter from './CardCharacter'

export type Character = {
   id: number
   name: string
   status: string
   species: string
   image: string
}

function CardsLayout() {
   const { data, error, isLoading } = useCharacters()

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>
   if (!data) return <div>No data available</div>

   return (
      <div className='flex flex-wrap justify-center'>
         {data.map((character: Character) => (
            <CardCharacter key={character.id} {...character} />
         ))}
      </div>
   )
}

export default CardsLayout
