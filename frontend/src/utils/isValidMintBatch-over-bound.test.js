import { describe, expect, it } from 'vitest'
import { isValidMintBatch } from './validators'

describe('isValidMintBatch', () => {
  it('rejects mint batch sizes above the maximum', () => {
    expect(isValidMintBatch(11)).toBe(false)
  })
})
