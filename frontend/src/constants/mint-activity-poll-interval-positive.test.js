import { describe, expect, it } from 'vitest'
import { MINT_ACTIVITY_POLL_INTERVAL_MS } from './index.js'

describe('constants mint activity polling', () => {
  it('keeps poll interval as a positive integer duration', () => {
    expect(Number.isInteger(MINT_ACTIVITY_POLL_INTERVAL_MS)).toBe(true)
    expect(MINT_ACTIVITY_POLL_INTERVAL_MS).toBeGreaterThan(0)
  })
})
