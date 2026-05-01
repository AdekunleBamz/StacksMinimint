import { describe, expect, it } from 'vitest'
import { formatPercentFromBps } from './format'

describe('formatPercentFromBps', () => {
  it('coerces numeric strings before percentage formatting', () => {
    expect(formatPercentFromBps('300')).toBe('3.00%')
  })
})
