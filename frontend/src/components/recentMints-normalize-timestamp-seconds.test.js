import { describe, expect, it } from 'vitest'
import { normalizeMintTimestamp } from './RecentMints'

describe('normalizeMintTimestamp', () => {
  it('converts unix-second timestamps into milliseconds', () => {
    expect(normalizeMintTimestamp(1710000000)).toBe(1710000000000)
  })
})
