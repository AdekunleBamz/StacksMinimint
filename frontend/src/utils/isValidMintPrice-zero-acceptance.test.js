import { describe, expect, it } from 'vitest'
import { isValidMintPrice } from './validators'

describe('isValidMintPrice', () => {
  it('accepts zero as a valid mint price', () => {
    expect(isValidMintPrice(0)).toBe(true)
  })
})
