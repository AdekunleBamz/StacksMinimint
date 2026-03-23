import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('returns glow values in hsla format', () => {
    const accent = getCardAccent('seed-b')
    expect(accent.glow).toContain('hsla(')
  })
})
