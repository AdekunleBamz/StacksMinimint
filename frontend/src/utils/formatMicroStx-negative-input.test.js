import { describe, expect, it } from 'vitest'
import { formatMicroStx } from './format'

describe('formatMicroStx', () => {
  it('formats negative values with fixed precision', () => {
    expect(formatMicroStx(-500000)).toBe('-0.500000 STX')
  })
})
