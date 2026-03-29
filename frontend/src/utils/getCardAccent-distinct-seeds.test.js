import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent distinct seeds behavior coverage.
describe('getCardAccent', () => {
  it('generates different palettes for different seed values', () => {
    expect(getCardAccent('alpha')).not.toEqual(getCardAccent('beta'))
  })
})
