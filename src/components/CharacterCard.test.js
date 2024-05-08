import { render, screen } from '@testing-library/react'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
   it('renders character information correctly', () => {
      const mockProps = {
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }

      render(<CharacterCard {...mockProps} />)

      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.getByText('Status: Alive')).toBeInTheDocument()
      expect(screen.getByText('Species: Human')).toBeInTheDocument()

      const imgElement = screen.getByRole('img', { name: 'Rick Sanchez' })
      expect(imgElement.src).toContain(encodeURIComponent(mockProps.image))
   })
})
