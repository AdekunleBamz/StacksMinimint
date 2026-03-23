import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('coerces boolean true into a microstx amount', () => {
    expect(formatSTX(true)).toBe('0.000001')
  })
})
