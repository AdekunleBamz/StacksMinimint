import { describe, expect, it } from 'vitest'
import { formatRoyalty } from './format'

describe('formatRoyalty', () => {
  it('accepts numeric strings when formatting royalty percentages', () => {
    expect(formatRoyalty('250')).toBe('2.5%')
  })
})
