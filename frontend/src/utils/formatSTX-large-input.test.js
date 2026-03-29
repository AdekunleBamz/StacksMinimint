import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX large input behavior coverage.
// Scope note: validates formatSTX large input behavior for regressions.
describe('formatSTX', () => {
  it('formats larger micro-STX amounts with grouped output', () => {
    expect(formatSTX(123456789)).toBe('123.456789')
  })
})
