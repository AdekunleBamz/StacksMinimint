import { describe, expect, it } from 'vitest'
import { formatBidAmount } from './format'

describe('formatBidAmount', () => {
  it('keeps string inputs in bid labels', () => {
    expect(formatBidAmount('2.75')).toBe('Bid: 2.75 STX')
  })
})
