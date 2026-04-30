import { describe, expect, it } from 'vitest'
import { formatBlockTime } from './format'

describe('formatBlockTime midpoint rounding', () => {
  it('rounds 90 seconds to two minutes', () => {
    expect(formatBlockTime(90000)).toBe('2 min')
  })
})
