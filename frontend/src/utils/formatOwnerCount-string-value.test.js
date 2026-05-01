import { describe, expect, it } from 'vitest'
import { formatOwnerCount } from './format'

describe('formatOwnerCount', () => {
  it('supports string owner totals in formatted labels', () => {
    expect(formatOwnerCount('12')).toBe('12 owners')
  })
})
