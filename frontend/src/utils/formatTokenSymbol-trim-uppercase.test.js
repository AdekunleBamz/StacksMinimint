import { describe, expect, it } from 'vitest'
import { formatTokenSymbol } from './format'

describe('formatTokenSymbol', () => {
  it('trims and uppercases token symbols', () => {
    expect(formatTokenSymbol('  mini  ')).toBe('MINI')
  })
})
