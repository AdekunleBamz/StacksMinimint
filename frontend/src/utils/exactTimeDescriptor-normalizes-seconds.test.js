import { describe, expect, it } from 'vitest'
import { normalizeExactTimestamp } from './collection'

describe('normalizeExactTimestamp', () => {
  it('normalizes second timestamps into milliseconds', () => {
    expect(normalizeExactTimestamp(1_700_000_000)).toBe(1_700_000_000_000)
  })
})
