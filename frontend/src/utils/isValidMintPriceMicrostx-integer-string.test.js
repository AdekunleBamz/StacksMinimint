import { describe, expect, it } from 'vitest'
import { isValidMintPriceMicrostx } from './validators'

describe('isValidMintPriceMicrostx', () => {
  it('accepts integer numeric strings', () => {
    expect(isValidMintPriceMicrostx('1000')).toBe(true)
  })
})
