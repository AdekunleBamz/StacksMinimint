import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('accepts millisecond timestamps provided as strings', () => {
    expect(formatExactTime('1710000000000')).not.toBe('Unknown time')
  })
})
