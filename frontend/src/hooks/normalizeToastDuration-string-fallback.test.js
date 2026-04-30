import { describe, expect, it } from 'vitest'
import { normalizeToastDuration } from './useToast'

describe('normalizeToastDuration', () => {
  it('uses fallback for numeric strings that are not finite numbers', () => {
    expect(normalizeToastDuration('1200', 900)).toBe(900)
  })
})
