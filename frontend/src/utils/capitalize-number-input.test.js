import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('returns empty string for non-string numeric input', () => {
    expect(capitalize(123)).toBe('')
  })
})
