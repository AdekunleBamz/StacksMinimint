import { describe, expect, it } from 'vitest'
import { isValidTokenURI } from './validators'

describe('isValidTokenURI', () => {
  it('accepts uppercase scheme prefixes through case-insensitive matching', () => {
    expect(isValidTokenURI('HTTPS://example.com/meta.json')).toBe(true)
  })
})
