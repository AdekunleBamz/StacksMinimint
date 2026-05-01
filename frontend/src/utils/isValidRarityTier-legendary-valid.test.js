import { describe, expect, it } from 'vitest'
import { isValidRarityTier } from './validators'

describe('isValidRarityTier', () => {
  it('accepts legendary as a supported rarity tier', () => {
    expect(isValidRarityTier('legendary')).toBe(true)
  })
})
