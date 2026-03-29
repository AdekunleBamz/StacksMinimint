import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize leading symbol input behavior coverage.
// Scope note: validates capitalize leading symbol input behavior for regressions.
describe('capitalize', () => {
  it('keeps leading non-letter symbols unchanged', () => {
    expect(capitalize('#stacks')).toBe('#stacks')
  })
})
