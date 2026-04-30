import { describe, expect, it } from 'vitest'
import { formatMintDate } from './format'

describe('formatMintDate', () => {
  it('returns Invalid Date for unparsable timestamps', () => {
    expect(formatMintDate('not-a-date')).toBe('Invalid Date')
  })
})
