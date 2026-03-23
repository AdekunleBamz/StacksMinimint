import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('stringifies arrays into comma-separated output', () => {
    expect(formatLimit([1, 2, 3])).toBe('1,2,3')
  })
})
