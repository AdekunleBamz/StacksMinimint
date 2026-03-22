import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('accepts unix time provided as a numeric string in seconds', () => {
    expect(formatExactTime('1710000000')).not.toBe('Unknown time')
  })
})
