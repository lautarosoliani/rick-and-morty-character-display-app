import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CharactersDashboard from './CharactersDashboard'
import { useCharacters } from '../hooks/useCharacters'

jest.mock('../hooks/useCharacters')

const queryClient = new QueryClient()

describe('CharactersDashboard', () => {
   it('displays loading state correctly', () => {
      useCharacters.mockImplementation(() => ({
         isLoading: true,
         data: null,
         error: null,
      }))

      render(
         <QueryClientProvider client={queryClient}>
            <CharactersDashboard />
         </QueryClientProvider>
      )
      expect(screen.getByText('Loading...')).toBeInTheDocument()
   })

   it('displays error state correctly', () => {
      useCharacters.mockImplementation(() => ({
         isLoading: false,
         data: null,
         error: { message: 'Error fetching data' },
      }))

      render(
         <QueryClientProvider client={queryClient}>
            <CharactersDashboard />
         </QueryClientProvider>
      )
      expect(screen.getByText('Error: Error fetching data')).toBeInTheDocument()
   })
})
