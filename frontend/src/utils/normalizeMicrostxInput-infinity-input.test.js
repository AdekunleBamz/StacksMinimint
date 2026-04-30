import { describe, expect, it } from 'vitest'
import { normalizeMicrostxInput } from './collection'

describe('normalizeMicrostxInput', () => {
  it('returns null for Infinity values', () => {
    expect(normalizeMicrostxInput(Infinity)).toBeNull()
  })
})
