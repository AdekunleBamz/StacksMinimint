import { describe, expect, it } from 'vitest'
import { isValidMaxPerWallet } from './validators'

describe('isValidMaxPerWallet', () => {
  it('accepts trimmed numeric strings', () => {
    expect(isValidMaxPerWallet(' 12 ')).toBe(true)
  })
})
