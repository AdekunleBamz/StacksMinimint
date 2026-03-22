import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats larger micro-STX amounts with grouped output', () => {
    expect(formatSTX(123456789)).toBe('123.456789')
  })
})
