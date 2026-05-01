import { describe, expect, it } from 'vitest'
import { formatBidAmount } from './format'

describe('formatBidAmount', () => {
  it('renders zero bid amounts without fallback copy', () => {
    expect(formatBidAmount(0)).toBe('Bid: 0 STX')
  })
})
