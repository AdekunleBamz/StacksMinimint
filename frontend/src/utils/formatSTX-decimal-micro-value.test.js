import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats decimal micro-STX values without crashing', () => {
    expect(formatSTX(1500000.5)).toBe('1.500001')
  })
})
