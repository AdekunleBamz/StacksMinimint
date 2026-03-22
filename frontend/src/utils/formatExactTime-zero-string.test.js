import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('formats epoch timestamps when provided as a string', () => {
    expect(formatExactTime('0')).not.toBe('Unknown time')
  })
})
