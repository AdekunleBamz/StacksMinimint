import { describe, expect, it } from 'vitest'
import { isValidMintPriceMicrostx } from './validators'

describe('isValidMintPriceMicrostx', () => {
  it('rejects decimal microstx values', () => {
    expect(isValidMintPriceMicrostx('1.2')).toBe(false)
    expect(isValidMintPriceMicrostx('10.5')).toBe(false)
  })
})
