import { Character } from '@/components/CharactersDashboard'

/**
 * @param character
 * @param comparisonCharacter
 * @returns
 */
export function getUniqueEpisodes(character: Character | null, comparisonCharacter: Character | null): string[] {
   if (!character) return []
   return character.episode.filter((ep) => !comparisonCharacter?.episode.includes(ep))
}

/**
 * @param character1
 * @param character2
 * @returns
 */

export function getSharedEpisodes(character1: Character | null, character2: Character | null): string[] {
   if (!character1 || !character2) return []
   return character1.episode.filter((ep) => character2.episode.includes(ep))
}
