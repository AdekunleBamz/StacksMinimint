import { describe, expect, it } from 'vitest'
import { formatPercentFromBps } from './format'

describe('formatPercentFromBps', () => {
  it('renders percentages with two decimal places', () => {
    expect(formatPercentFromBps(255)).toBe('2.55%')
  })
})
