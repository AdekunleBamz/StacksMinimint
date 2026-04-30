import { describe, expect, it } from 'vitest'
import { formatBlockTime } from './format'

describe('formatBlockTime', () => {
  it('treats null as zero milliseconds', () => {
    expect(formatBlockTime(null)).toBe('0 min')
  })
})
