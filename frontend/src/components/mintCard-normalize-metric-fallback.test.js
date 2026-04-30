import { describe, expect, it } from 'vitest'
import { normalizeMintMetricValue } from './MintCard'

describe('normalizeMintMetricValue', () => {
  it('returns fallback when metric value is not numeric', () => {
    expect(normalizeMintMetricValue('abc', 12)).toBe(12)
  })
})
