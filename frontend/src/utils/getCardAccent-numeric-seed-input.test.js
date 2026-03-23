import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('accepts numeric seeds by coercing to strings', () => {
    const accent = getCardAccent(42)
    expect(accent.primary).toContain('hsl(')
  })
})
