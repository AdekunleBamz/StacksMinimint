import { describe, expect, it } from 'vitest'
import { isValidOwnerAddress } from './validators'

describe('isValidOwnerAddress', () => {
  it('accepts uppercase testnet-style ST addresses', () => {
    expect(isValidOwnerAddress(`ST${'A'.repeat(38)}`)).toBe(true)
  })
})
