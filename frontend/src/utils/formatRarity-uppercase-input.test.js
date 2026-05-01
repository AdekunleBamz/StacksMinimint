import { describe, expect, it } from 'vitest'
import { formatRarity } from './format'

describe('formatRarity', () => {
  it('preserves uppercase rarity labels', () => {
    expect(formatRarity('EPIC')).toBe('EPIC')
  })
})
