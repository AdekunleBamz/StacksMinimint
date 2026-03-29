import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit object output behavior coverage.
// Scope note: validates formatLimit object output behavior for regressions.
describe('formatLimit', () => {
  it('stringifies object values for display', () => {
    expect(formatLimit({ cap: 2 })).toBe('[object Object]')
  })
})
