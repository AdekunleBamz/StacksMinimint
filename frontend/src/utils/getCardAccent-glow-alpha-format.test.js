import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

// Regression note: preserve getCardAccent glow alpha format behavior coverage.
describe('getCardAccent', () => {
  it('returns glow values in hsla format', () => {
    const accent = getCardAccent('seed-b')
    expect(accent.glow).toContain('hsla(')
  })
})
