import { describe, expect, it } from 'vitest'
import { MAX_TOASTS } from './index.js'

describe('constants toast queue limits', () => {
  it('keeps MAX_TOASTS as a positive integer', () => {
    expect(Number.isInteger(MAX_TOASTS)).toBe(true)
    expect(MAX_TOASTS).toBeGreaterThan(0)
  })
})
