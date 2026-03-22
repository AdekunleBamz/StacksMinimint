import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('formats boolean values as strings instead of using the fallback', () => {
    expect(formatLimit(false)).toBe('false')
  })
})
