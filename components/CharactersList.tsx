'use client'
import React from 'react'
import { useCharacters } from '../hooks/useCharacters'

function CharactersList() {
   const { data, error, isLoading } = useCharacters()

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>
   if (!data) return <div>No data available</div>

   // Convertir data a string JSON y luego parsear a objeto
   const jsonString = JSON.stringify(data)
   const characters = JSON.parse(jsonString)

   return (
      <div>
         {characters.map((character: any) => (
            <div key={character.id}>
               <h3>{character.name}</h3>
               <p>Status: {character.status}</p>
               <p>Species: {character.species}</p>
            </div>
         ))}
      </div>
   )
}

export default CharactersList
