import { describe, expect, it } from 'vitest'
import { isValidRevealDelay } from './validators'

describe('isValidRevealDelay', () => {
  it('accepts zero delays passed as strings', () => {
    expect(isValidRevealDelay('0')).toBe(true)
  })
})
