import { describe, expect, it } from 'vitest'
import { isValidMaxPerWallet } from './validators'

describe('isValidMaxPerWallet', () => {
  it('rejects zero as an invalid wallet limit', () => {
    expect(isValidMaxPerWallet(0)).toBe(false)
  })
})
