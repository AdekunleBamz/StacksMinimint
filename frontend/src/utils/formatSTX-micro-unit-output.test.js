import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats one microstx with six decimal places', () => {
    expect(formatSTX(1)).toBe('0.000001')
  })
})
