import { describe, expect, it } from 'vitest'
import { formatMintPrice } from './format'

describe('formatMintPrice', () => {
  it('keeps negative values explicit in output', () => {
    expect(formatMintPrice(-1)).toBe('-1 STX')
  })
})
