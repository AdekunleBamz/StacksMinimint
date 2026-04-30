import { describe, expect, it } from 'vitest'
import { isValidMintBatch } from './validators'

describe('isValidMintBatch', () => {
  it('accepts the maximum allowed mint batch size', () => {
    expect(isValidMintBatch(10)).toBe(true)
  })
})
