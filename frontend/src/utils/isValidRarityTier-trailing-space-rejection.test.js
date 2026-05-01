import { describe, expect, it } from 'vitest'
import { isValidRarityTier } from './validators'

describe('isValidRarityTier', () => {
  it('rejects rarity tiers with trailing spaces', () => {
    expect(isValidRarityTier('rare ')).toBe(false)
  })
})
