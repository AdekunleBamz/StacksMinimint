import { describe, expect, it } from 'vitest'
import { isValidTokenURI } from './validators'

describe('isValidTokenURI', () => {
  it('accepts trimmed ipfs urls', () => {
    expect(isValidTokenURI('  ipfs://bafy12345  ')).toBe(true)
  })
})
