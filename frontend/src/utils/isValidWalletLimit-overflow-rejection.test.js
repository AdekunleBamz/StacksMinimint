import { describe, expect, it } from 'vitest'
import { isValidWalletLimit } from './validators'

describe('isValidWalletLimit', () => {
  it('rejects wallet limits above the supported maximum', () => {
    expect(isValidWalletLimit(1001)).toBe(false)
  })
})
