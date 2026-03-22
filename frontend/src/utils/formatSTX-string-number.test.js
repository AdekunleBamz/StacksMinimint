import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats numeric strings as micro-STX values', () => {
    expect(formatSTX('1000000')).toBe('1')
  })
})
