// jest.config.js
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   setupFilesAfterEnv: ['./jest.setup.js'],
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for transpiling
   },
}
