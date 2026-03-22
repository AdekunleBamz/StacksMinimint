import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('returns an empty string for blank values', () => {
    expect(formatAddress('')).toBe('')
  })
})
