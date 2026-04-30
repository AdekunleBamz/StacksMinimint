import { describe, expect, it } from 'vitest'
import { formatBidAmount } from './format'

describe('formatBidAmount', () => {
  it('formats string bid amounts without dropping precision', () => {
    expect(formatBidAmount('2.5')).toBe('Bid: 2.5 STX')
  })

  it('keeps string inputs in bid labels', () => {
    expect(formatBidAmount('2.75')).toBe('Bid: 2.75 STX')
  })
})
