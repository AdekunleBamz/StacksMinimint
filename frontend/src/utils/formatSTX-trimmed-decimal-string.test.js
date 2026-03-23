import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('trims decimal strings before formatting', () => {
    expect(formatSTX(' 2500000.5 ')).toBe('2.500001')
  })
})
