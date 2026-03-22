import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('returns stable colors for the same seed', () => {
    const first = getCardAccent('seed-value')
    const second = getCardAccent('seed-value')
    expect(first).toEqual(second)
  })
})
