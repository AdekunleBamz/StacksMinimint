import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('returns distinct primary and secondary accents', () => {
    const accent = getCardAccent('seed-a')
    expect(accent.primary).not.toBe(accent.secondary)
  })
})
