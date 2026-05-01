import { describe, expect, it } from 'vitest'
import { formatSupply } from './format'

describe('formatSupply', () => {
  it('formats zero minted and max values', () => {
    expect(formatSupply(0, 0)).toBe('0 / 0')
  })
})
