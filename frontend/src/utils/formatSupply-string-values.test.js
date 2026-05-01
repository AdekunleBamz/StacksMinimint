import { describe, expect, it } from 'vitest'
import { formatSupply } from './format'

describe('formatSupply', () => {
  it('renders string minted and max values as provided', () => {
    expect(formatSupply('3', '25')).toBe('3 / 25')
  })
})
