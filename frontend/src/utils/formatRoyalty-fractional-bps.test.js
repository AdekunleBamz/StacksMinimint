import { describe, expect, it } from 'vitest'
import { formatRoyalty } from './format'

describe('formatRoyalty', () => {
  it('rounds fractional percent output to one decimal place', () => {
    expect(formatRoyalty(15)).toBe('0.1%')
  })
})
