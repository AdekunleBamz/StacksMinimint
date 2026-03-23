import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('coerces boolean false into zero microstx', () => {
    expect(formatSTX(false)).toBe('0')
  })
})
