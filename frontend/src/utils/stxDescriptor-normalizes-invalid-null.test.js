import { describe, expect, it } from 'vitest'
import { normalizeMicrostxInput } from './collection'

describe('normalizeMicrostxInput', () => {
  it('returns null for invalid input values', () => {
    expect(normalizeMicrostxInput(null)).toBeNull()
    expect(normalizeMicrostxInput('not-a-number')).toBeNull()
  })
})
