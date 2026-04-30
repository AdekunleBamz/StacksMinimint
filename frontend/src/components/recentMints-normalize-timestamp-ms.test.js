import { describe, expect, it } from 'vitest'
import { normalizeMintTimestamp } from './RecentMints'

describe('normalizeMintTimestamp', () => {
  it('preserves millisecond timestamps without scaling', () => {
    expect(normalizeMintTimestamp(1710000000123)).toBe(1710000000123)
  })
})
