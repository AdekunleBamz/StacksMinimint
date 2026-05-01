import { describe, expect, it } from 'vitest'
import { isValidListingPrice } from './validators'

describe('isValidListingPrice', () => {
  it('accepts scientific notation listing prices above zero', () => {
    expect(isValidListingPrice('1e-3')).toBe(true)
  })
})
