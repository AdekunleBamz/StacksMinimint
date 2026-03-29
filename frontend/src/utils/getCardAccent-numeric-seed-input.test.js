import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent numeric seed input behavior coverage.
describe('getCardAccent', () => {
  it('accepts numeric seeds by coercing to strings', () => {
    const accent = getCardAccent(42)
    expect(accent.primary).toContain('hsl(')
  })
})
