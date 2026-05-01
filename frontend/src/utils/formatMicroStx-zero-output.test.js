import { describe, expect, it } from 'vitest'
import { formatMicroStx } from './format'

describe('formatMicroStx', () => {
  it('formats zero microstx with fixed precision', () => {
    expect(formatMicroStx(0)).toBe('0.000000 STX')
  })
})
