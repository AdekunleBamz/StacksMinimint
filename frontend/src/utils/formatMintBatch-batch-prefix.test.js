import { describe, expect, it } from 'vitest'
import { formatMintBatch } from './format'

describe('formatMintBatch', () => {
  it('prefixes batch output with the batch marker', () => {
    expect(formatMintBatch(4)).toBe('Batch x4')
  })
})
