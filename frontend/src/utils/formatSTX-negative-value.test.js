import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('preserves sign when formatting negative values', () => {
    expect(formatSTX(-1000000)).toBe('-1')
  })
})
