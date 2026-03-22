import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('returns fallback text for blank string values', () => {
    expect(formatLimit('   ', 'Unset')).toBe('Unset')
  })
})
