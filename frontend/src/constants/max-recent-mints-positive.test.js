import { describe, expect, it } from 'vitest'
import { MAX_RECENT_MINTS } from './index.js'

describe('constants recent mint settings', () => {
  it('keeps MAX_RECENT_MINTS as a positive integer', () => {
    expect(Number.isInteger(MAX_RECENT_MINTS)).toBe(true)
    expect(MAX_RECENT_MINTS).toBeGreaterThan(0)
  })
})
