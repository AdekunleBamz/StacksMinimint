import { describe, expect, it } from 'vitest'
import { formatRoyalty } from './format'

describe('formatRoyalty', () => {
  it('formats max royalty basis points as full percent', () => {
    expect(formatRoyalty(10000)).toBe('100.0%')
  })
})
