import { twMerge } from 'tailwind-merge'

type EpisodeListProps = {
   episodes: { data: { name: string } | null; error: Error | null; isLoading: boolean }[]
   title: string
   isVisible: boolean
}

function EpisodeList(props: EpisodeListProps) {
   const { episodes, title, isVisible } = props
   return (
      <div>
         <div className={twMerge('text-2xl font-bold text-gray-50 mb-2', !isVisible && 'invisible')}>{title}</div>
         <ul>
            {episodes.some((query) => query.isLoading) ? (
               <li>Loading...</li>
            ) : episodes.some((query) => query.error) ? (
               episodes
                  .filter((query) => query.error)
                  .map((query, index) => <li key={index}>Error: {query.error?.message}</li>)
            ) : episodes.filter((query) => query.data && query.data.name).length > 0 ? (
               episodes
                  .filter((query) => query.data?.name)
                  .map((query, index) => <li key={index}>{query.data?.name}</li>)
            ) : (
               <li className={twMerge(!isVisible && 'invisible')}>No episodes shared</li>
            )}
         </ul>
      </div>
   )
}

export default EpisodeList
