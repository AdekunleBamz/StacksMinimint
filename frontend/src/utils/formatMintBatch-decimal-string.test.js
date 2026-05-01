import { describe, expect, it } from 'vitest'
import { formatMintBatch } from './format'

describe('formatMintBatch', () => {
  it('keeps decimal values after numeric coercion', () => {
    expect(formatMintBatch('2.5')).toBe('Batch x2.5')
  })
})
