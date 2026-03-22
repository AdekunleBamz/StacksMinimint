import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('returns HSL and HSLA formatted color values', () => {
    const accent = getCardAccent('format-check')
    expect(accent.primary.startsWith('hsl(')).toBe(true)
    expect(accent.secondary.startsWith('hsl(')).toBe(true)
    expect(accent.glow.startsWith('hsla(')).toBe(true)
  })
})
