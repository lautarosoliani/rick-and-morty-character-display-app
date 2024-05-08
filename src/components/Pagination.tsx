type PaginationData = {
   info: {
      next: boolean
   }
}

type PaginationProps = {
   page: number
   data: PaginationData
   setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ page, data, setPage }) => {
   return (
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
   )
}

export default Pagination
