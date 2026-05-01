import { describe, expect, it } from 'vitest'
import { isValidWalletLimit } from './validators'

describe('isValidWalletLimit', () => {
  it('accepts minimum wallet limit boundary', () => {
    expect(isValidWalletLimit(1)).toBe(true)
  })
})
