import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('returns an empty string for whitespace-only input', () => {
    expect(formatAddress('    ')).toBe('')
  })
})
