import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('parses numeric strings with surrounding whitespace', () => {
    expect(formatSTX('   2000000   ')).toBe('2')
  })
})
