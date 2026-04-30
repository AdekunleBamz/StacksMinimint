import { describe, expect, it } from 'vitest'
import { isValidWalletLimit } from './validators'

describe('isValidWalletLimit', () => {
  it('rejects values above the upper bound', () => {
    expect(isValidWalletLimit(1001)).toBe(false)
  })
})
