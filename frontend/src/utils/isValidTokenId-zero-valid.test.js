import { describe, expect, it } from 'vitest'
import { isValidTokenId } from './validators'

describe('isValidTokenId', () => {
  it('accepts zero as a valid token id', () => {
    expect(isValidTokenId(0)).toBe(true)
  })
})
