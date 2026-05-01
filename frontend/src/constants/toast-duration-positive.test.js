import { describe, expect, it } from 'vitest'
import { TOAST_DURATION } from './index.js'

describe('constants toast timing', () => {
  it('keeps TOAST_DURATION as a positive integer duration', () => {
    expect(Number.isInteger(TOAST_DURATION)).toBe(true)
    expect(TOAST_DURATION).toBeGreaterThan(0)
  })
})
