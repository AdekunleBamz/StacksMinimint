import { describe, expect, it } from 'vitest'
import { isLimitFallback } from './collection'

describe('isLimitFallback', () => {
  it('treats blank string values as fallback states', () => {
    expect(isLimitFallback('   ')).toBe(true)
  })
})
