import { Character } from './CharactersDashboard'
import Image from 'next/image'
import Select from 'react-select'

type OptionType = {
   value: string
   label: string
}

type CharacterSelectProps = {
   character: Character | null
   onChange: (characterId: string | null) => void
   onRemove: () => void
   characterNumber: number
   data: Character[]
}

function CharacterSelect(props: CharacterSelectProps) {
   const { character, onChange, onRemove, characterNumber, data } = props

   const options = data.map((char) => ({
      value: char.id.toString(),
      label: char.name,
   }))

   const handleChange = (selectedOption: OptionType | null) => {
      if (selectedOption) {
         onChange(selectedOption.value)
      } else {
         onChange(null)
      }
   }

   return (
      <div className='flex flex-col w-full space-y-5'>
         <h1 className='text-2xl font-bold text-gray-50 text-center mb-2'>Select Character #{characterNumber}</h1>
         <Select
            classNamePrefix='select'
            defaultValue={character ? { value: character.id.toString(), label: character.name } : undefined}
            isClearable={true}
            isSearchable={true}
            name='character'
            options={options}
            onChange={handleChange}
            value={character ? { value: character.id.toString(), label: character.name } : null}
            styles={{
               control: (provided) => ({
                  ...provided,
                  backgroundColor: '#172554',
                  cursor: 'pointer',
               }),
               singleValue: (provided) => ({
                  ...provided,
                  color: 'white',
               }),
               placeholder: (provided) => ({
                  ...provided,
                  color: 'white',
               }),
               input: (provided) => ({
                  ...provided,
                  color: 'white',
               }),
               dropdownIndicator: (provided) => ({
                  ...provided,
                  color: 'white',
               }),
            }}
         />
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
            <button className='text-white' onClick={onRemove}>
               Remove Selection
            </button>
         </div>
      </div>
   )
}

export default CharacterSelect
