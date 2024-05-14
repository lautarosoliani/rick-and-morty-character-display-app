import React, { useState } from 'react'
import { CharactersResponse } from '../hooks/useCharacters'

type PaginationProps = {
   page: number
   data: CharactersResponse | null
   setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ page, data, setPage }) => {
   const [inputPage, setInputPage] = useState('')

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputPage(event.target.value)
   }

   const goToPage = () => {
      const pageNumber = parseInt(inputPage, 10)
      if (data && pageNumber >= 1 && pageNumber <= data.info.pages && pageNumber !== page) {
         setPage(pageNumber)
         setInputPage('')
      }
   }

   const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
         goToPage()
      }
   }

   return (
      <div className='flex justify-center mt-6'>
         <button
            className='bg-blue-950 text-white border-2 border-blue-900 hover:bg-blue-800 font-bold py-2 px-4 rounded-l'
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
         >
            Previous
         </button>
         <div className='text-white font-bold py-2 px-4'>{`Page ${page} of ${data?.info.pages ?? 0}`}</div>
         <button
            className='bg-blue-950 text-white border-2 border-blue-900 hover:bg-blue-800 font-bold py-2 px-4 rounded-r'
            onClick={() => setPage((old) => (data?.info.next ? old + 1 : old))}
            disabled={!data?.info.next}
         >
            Next
         </button>
         <span className='text-white font-bold py-2 px-4'>Go to page:</span>
         <input
            type='text'
            value={inputPage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className='text-center w-full bg-blue-950 text-white border-2 border-blue-900 font-bold rounded-xl hover:cursor-pointer focus:border-blue-800 focus:outline-none'
            style={{ width: '50px' }}
         />
      </div>
   )
}

export default Pagination
