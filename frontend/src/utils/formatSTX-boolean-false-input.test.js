import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX boolean false input behavior coverage.
// Scope note: validates formatSTX boolean false input behavior for regressions.
describe('formatSTX', () => {
  it('coerces boolean false into zero microstx', () => {
    expect(formatSTX(false)).toBe('0')
  })
})
