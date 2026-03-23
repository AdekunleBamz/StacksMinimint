import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('uses the default fallback for whitespace-only values', () => {
    expect(formatLimit('  ')).toBe('Not set')
  })
})
