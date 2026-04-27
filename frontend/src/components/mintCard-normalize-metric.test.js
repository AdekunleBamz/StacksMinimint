import { describe, expect, it } from 'vitest'
import { normalizeMintMetricValue } from './MintCard'

describe('normalizeMintMetricValue', () => {
  it('parses numeric string values for stat rendering', () => {
    expect(normalizeMintMetricValue('7')).toBe(7)
  })
})
