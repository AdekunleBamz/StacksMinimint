import { describe, expect, it } from 'vitest'
import { formatRevealDelay } from './format'

describe('formatRevealDelay', () => {
  it('coerces numeric string block values', () => {
    expect(formatRevealDelay('6')).toBe('6 blocks to reveal')
  })
})
