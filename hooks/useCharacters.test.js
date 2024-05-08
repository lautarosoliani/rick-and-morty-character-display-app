import { renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCharacters } from './useCharacters'

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

describe('useCharacters', () => {
   it('initializes the hook without errors and checks initial states', () => {
      const { result } = renderHook(() => useCharacters(1), { wrapper: createWrapper() })

      expect(result.current.isLoading).toBeTruthy()
      expect(result.current.data).toBeUndefined()
      expect(result.current.error).toBeNull()
   })
})
