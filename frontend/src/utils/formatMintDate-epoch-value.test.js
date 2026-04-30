import { describe, expect, it } from 'vitest'
import { formatMintDate } from './format'

describe('formatMintDate', () => {
  it('formats epoch timestamps using locale date output', () => {
    expect(formatMintDate(0)).toBe(new Date(0).toLocaleDateString())
  })
})
