import { renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEpisodes } from './useEpisodes'

const createWrapper = () => {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            retry: false,
         },
      },
   })

   const Wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

   Wrapper.displayName = 'Wrapper'

   return Wrapper
}

describe('useEpisodes', () => {
   it('initializes the hook without errors and checks initial states', () => {
      const episodeUrls = ['http://example.com/episode1', 'http://example.com/episode2']
      const { result } = renderHook(() => useEpisodes(episodeUrls), { wrapper: createWrapper() })

      expect(result.current.every((query) => query.isLoading)).toBeTruthy()
      expect(result.current.every((query) => query.data === undefined)).toBeTruthy()
      expect(result.error).toBeUndefined()
   })
})
