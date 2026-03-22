import { describe, expect, it } from 'vitest'
import { getCardAccent } from './collection'

describe('getCardAccent', () => {
  it('falls back to the default seed when an empty seed is provided', () => {
    expect(getCardAccent('')).toEqual(getCardAccent('minimint'))
  })
})
