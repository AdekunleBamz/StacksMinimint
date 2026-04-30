import { describe, expect, it } from 'vitest'
import { formatSupply } from './format'

describe('formatSupply', () => {
  it('renders string values without coercion side effects', () => {
    expect(formatSupply('07', '0100')).toBe('07 / 0100')
  })
})
