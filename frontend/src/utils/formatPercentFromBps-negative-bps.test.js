import { describe, expect, it } from 'vitest'
import { formatPercentFromBps } from './format'

describe('formatPercentFromBps', () => {
  it('formats negative basis points with sign preserved', () => {
    expect(formatPercentFromBps(-50)).toBe('-0.50%')
  })
})
