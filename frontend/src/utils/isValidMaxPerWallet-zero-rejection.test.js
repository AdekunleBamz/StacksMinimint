import { describe, expect, it } from 'vitest'
import { isValidMaxPerWallet } from './validators'

describe('isValidMaxPerWallet', () => {
  it('rejects zero max-per-wallet values', () => {
    expect(isValidMaxPerWallet(0)).toBe(false)
  })
})
