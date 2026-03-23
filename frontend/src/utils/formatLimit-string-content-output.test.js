import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('returns non-empty strings unchanged', () => {
    expect(formatLimit('No cap')).toBe('No cap')
  })
})
