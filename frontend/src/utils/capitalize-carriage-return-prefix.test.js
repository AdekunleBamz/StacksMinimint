import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize carriage return prefix behavior coverage.
describe('capitalize', () => {
  it('capitalizes values prefixed by carriage return characters', () => {
    expect(capitalize('\rhello')).toBe('Hello')
  })
})
