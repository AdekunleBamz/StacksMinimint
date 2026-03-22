import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('stringifies numeric values', () => {
    expect(formatLimit(12)).toBe('12')
  })
})
