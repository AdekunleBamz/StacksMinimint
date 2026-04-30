import { describe, expect, it } from 'vitest'
import { isValidTokenURI } from './validators'

describe('isValidTokenURI', () => {
  it('accepts uppercase IPFS schemes', () => {
    expect(isValidTokenURI('IPFS://bafybeigdyrzt')).toBe(true)
  })
})
