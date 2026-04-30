import { describe, expect, it } from 'vitest'
import { normalizeToastDuration } from './useToast'

describe('normalizeToastDuration', () => {
  it('keeps positive finite durations unchanged', () => {
    expect(normalizeToastDuration(1800, 3000)).toBe(1800)
  })
})
