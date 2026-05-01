import { describe, expect, it } from 'vitest'
import { formatRoyalty } from './format'

describe('formatRoyalty', () => {
  it('shows zero basis points as zero percent', () => {
    expect(formatRoyalty(0)).toBe('0.0%')
  })
})
