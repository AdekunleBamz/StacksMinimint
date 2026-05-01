import { describe, expect, it } from 'vitest'
import { CLIPBOARD_TIMEOUT_MS } from './index.js'

describe('constants clipboard timing', () => {
  it('keeps CLIPBOARD_TIMEOUT_MS as a positive integer duration', () => {
    expect(Number.isInteger(CLIPBOARD_TIMEOUT_MS)).toBe(true)
    expect(CLIPBOARD_TIMEOUT_MS).toBeGreaterThan(0)
  })
})
