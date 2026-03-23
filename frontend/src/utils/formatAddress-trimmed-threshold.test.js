import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('trims before evaluating truncation thresholds', () => {
    expect(formatAddress('  SP1234567890  ')).toBe('SP1234567890')
  })
})
