import { describe, expect, it } from 'vitest'
import { formatCID } from './format'

describe('formatCID undefined input', () => {
  it('returns an empty string for undefined CID values', () => {
    expect(formatCID(undefined)).toBe('')
  })
})
