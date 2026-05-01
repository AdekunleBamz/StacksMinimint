import { describe, expect, it } from 'vitest'
import { formatMintDate } from './format'

describe('formatMintDate', () => {
  it('returns a non-empty date label for epoch timestamps', () => {
    expect(formatMintDate(0).length).toBeGreaterThan(0)
  })
})
