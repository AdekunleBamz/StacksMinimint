import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('preserves up to six decimals for large microstx inputs', () => {
    expect(formatSTX(123456789)).toBe('123.456789')
  })
})
