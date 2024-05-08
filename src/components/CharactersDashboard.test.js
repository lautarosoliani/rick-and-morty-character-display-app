import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CharactersDashboard from './CharactersDashboard'
import { useCharacters } from '../../hooks/useCharacters'

// Mocking the useCharacters hook
jest.mock('../../hooks/useCharacters')

// Create a QueryClient instance for React-Query
const queryClient = new QueryClient()

describe('CharactersDashboard', () => {
   it('displays loading state correctly', () => {
      // Mocking loading state
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
      // Mocking error state
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

   // Additional tests can be included here
})
