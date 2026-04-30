import { describe, expect, it } from 'vitest'
import { isLimitFallback } from './collection'

describe('isLimitFallback', () => {
  it('treats newline-only strings as fallback values', () => {
    expect(isLimitFallback('\n\n')).toBe(true)
  })
})
