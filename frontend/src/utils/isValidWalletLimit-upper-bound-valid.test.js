import { describe, expect, it } from 'vitest'
import { isValidWalletLimit } from './validators'

describe('isValidWalletLimit', () => {
  it('accepts the maximum wallet limit value', () => {
    expect(isValidWalletLimit(1000)).toBe(true)
  })
})
