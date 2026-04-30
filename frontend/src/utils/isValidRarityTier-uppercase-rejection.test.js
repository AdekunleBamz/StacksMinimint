import { describe, expect, it } from 'vitest'
import { isValidRarityTier } from './validators'

describe('isValidRarityTier', () => {
  it('rejects uppercase rarity labels', () => {
    expect(isValidRarityTier('RARE')).toBe(false)
  })
})
