import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('falls back to zero for comma-formatted strings', () => {
    expect(formatSTX('1,000')).toBe('0')
  })
})
