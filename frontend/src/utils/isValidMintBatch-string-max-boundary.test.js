import { describe, expect, it } from 'vitest'
import { isValidMintBatch } from './validators'

describe('isValidMintBatch', () => {
  it('accepts max batch value when provided as a string', () => {
    expect(isValidMintBatch('10')).toBe(true)
  })
})
