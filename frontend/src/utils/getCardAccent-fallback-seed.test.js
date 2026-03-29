import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent fallback seed behavior coverage.
describe('getCardAccent', () => {
  it('falls back to the default seed when an empty seed is provided', () => {
    expect(getCardAccent('')).toEqual(getCardAccent('minimint'))
  })
})
