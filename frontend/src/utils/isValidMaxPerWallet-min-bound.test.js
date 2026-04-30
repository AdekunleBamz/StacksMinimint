import { describe, expect, it } from 'vitest'
import { isValidMaxPerWallet } from './validators'

describe('isValidMaxPerWallet', () => {
  it('accepts the minimum wallet limit of one', () => {
    expect(isValidMaxPerWallet(1)).toBe(true)
  })
})
