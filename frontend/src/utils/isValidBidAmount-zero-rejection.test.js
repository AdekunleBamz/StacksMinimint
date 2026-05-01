import { describe, expect, it } from 'vitest'
import { isValidBidAmount } from './validators'

describe('isValidBidAmount', () => {
  it('rejects zero bid amounts', () => {
    expect(isValidBidAmount(0)).toBe(false)
  })
})
