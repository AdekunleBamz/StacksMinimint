import { describe, expect, it } from 'vitest'
import { formatMicroStx } from './format'

describe('formatMicroStx', () => {
  it('formats negative microstx values with fixed precision', () => {
    expect(formatMicroStx(-1000000)).toBe('-1.000000 STX')
  })
})
