import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX boolean true input behavior coverage.
// Scope note: validates formatSTX boolean true input behavior for regressions.
describe('formatSTX', () => {
  it('coerces boolean true into a microstx amount', () => {
    expect(formatSTX(true)).toBe('0.000001')
  })
})
