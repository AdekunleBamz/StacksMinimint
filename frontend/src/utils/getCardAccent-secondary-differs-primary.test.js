import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent secondary differs primary behavior coverage.
describe('getCardAccent', () => {
  it('returns distinct primary and secondary accents', () => {
    const accent = getCardAccent('seed-a')
    expect(accent.primary).not.toBe(accent.secondary)
  })
})
