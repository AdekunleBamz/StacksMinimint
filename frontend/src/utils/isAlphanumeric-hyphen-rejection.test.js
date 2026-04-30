import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('rejects values containing hyphens', () => {
    expect(isAlphanumeric('ABC-123')).toBe(false)
  })
})
