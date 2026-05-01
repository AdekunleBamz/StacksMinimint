import { describe, expect, it } from 'vitest'
import { formatBlockTime } from './format'

describe('formatBlockTime', () => {
  it('renders zero milliseconds as zero minutes', () => {
    expect(formatBlockTime(0)).toBe('0 min')
  })
})
