import { describe, expect, it } from 'vitest'
import { formatCID } from './format'

describe('formatCID', () => {
  it('returns empty output for null values', () => {
    expect(formatCID(null)).toBe('')
  })
})
