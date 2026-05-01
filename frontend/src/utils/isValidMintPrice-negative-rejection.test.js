import { describe, expect, it } from 'vitest'
import { isValidMintPrice } from './validators'

describe('isValidMintPrice', () => {
  it('rejects negative mint prices', () => {
    expect(isValidMintPrice(-0.01)).toBe(false)
  })
})
