import { describe, expect, it } from 'vitest'
import { normalizeRelativeTimestamp } from './collection'

describe('normalizeRelativeTimestamp', () => {
  it('converts second-based timestamps to milliseconds', () => {
    expect(normalizeRelativeTimestamp(1_700_000_000)).toBe(1_700_000_000_000)
  })
})
