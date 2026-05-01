import { describe, expect, it } from 'vitest'
import { isValidTokenId } from './validators'

describe('isValidTokenId', () => {
  it('accepts scientific notation that resolves to integers', () => {
    expect(isValidTokenId('1e2')).toBe(true)
  })
})
