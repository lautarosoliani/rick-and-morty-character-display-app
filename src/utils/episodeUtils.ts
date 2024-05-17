import { Character } from '@/components/CharactersDashboard'

/**
 * @param character
 * @param comparisonCharacter
 * @returns
 */
export function getUniqueEpisodes(character: Character | null, comparisonCharacter: Character | null): string[] {
   if (!character || !character.episode) return []
   if (!comparisonCharacter || !comparisonCharacter.episode) return character.episode
   return character.episode.filter((ep: string) => !comparisonCharacter.episode!.includes(ep))
}

/**
 * @param character1
 * @param character2
 * @returns
 */
export function getSharedEpisodes(character1: Character | null, character2: Character | null): string[] {
   if (!character1 || !character1.episode || !character2 || !character2.episode) return []
   return character1.episode.filter((ep: string) => character2.episode!.includes(ep))
}
