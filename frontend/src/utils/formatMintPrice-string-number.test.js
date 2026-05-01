import { describe, expect, it } from 'vitest'
import { formatMintPrice } from './format'

describe('formatMintPrice', () => {
  it('formats numeric string values with STX unit suffix', () => {
    expect(formatMintPrice('4.2')).toBe('4.2 STX')
  })
})
