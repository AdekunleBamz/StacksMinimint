import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('returns fallback text when value is null', () => {
    expect(formatLimit(null, 'Unset')).toBe('Unset')
  })
})
