import { describe, expect, it } from 'vitest'
import { normalizeMicrostxInput } from './collection'

describe('normalizeMicrostxInput', () => {
  it('trims and parses numeric string values', () => {
    expect(normalizeMicrostxInput(' 1000 ')).toBe(1000)
  })
})
