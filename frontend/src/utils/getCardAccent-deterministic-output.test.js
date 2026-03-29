import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent deterministic output behavior coverage.
describe('getCardAccent', () => {
  it('returns stable colors for the same seed', () => {
    const first = getCardAccent('seed-value')
    const second = getCardAccent('seed-value')
    expect(first).toEqual(second)
  })
})
