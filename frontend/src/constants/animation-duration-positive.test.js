import { describe, expect, it } from 'vitest'
import { ANIMATION_DURATION_MS } from './index.js'

describe('constants animation timing', () => {
  it('keeps ANIMATION_DURATION_MS as a positive integer duration', () => {
    expect(Number.isInteger(ANIMATION_DURATION_MS)).toBe(true)
    expect(ANIMATION_DURATION_MS).toBeGreaterThan(0)
  })
})
