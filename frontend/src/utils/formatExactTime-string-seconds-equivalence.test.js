import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('formats second strings and second numbers equivalently', () => {
    expect(formatExactTime('1710000000')).toBe(formatExactTime(1710000000))
  })
})
