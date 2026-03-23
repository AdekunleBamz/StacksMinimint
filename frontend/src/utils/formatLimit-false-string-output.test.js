import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('keeps explicit false-like strings', () => {
    expect(formatLimit('false')).toBe('false')
  })
})
