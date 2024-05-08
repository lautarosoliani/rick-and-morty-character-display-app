import '@testing-library/jest-dom'

beforeEach(() => {
   global.fetch = jest.fn(() =>
      Promise.resolve({
         ok: true,
         json: () => Promise.resolve({ results: [{ id: 1, name: 'Rick Sanchez' }] }),
      })
   )
})

afterEach(() => {
   jest.restoreAllMocks()
})
