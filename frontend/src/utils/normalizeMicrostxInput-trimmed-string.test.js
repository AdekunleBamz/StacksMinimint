import { describe, expect, it } from 'vitest'
import { normalizeMicrostxInput } from './collection'

describe('normalizeMicrostxInput', () => {
  it('parses trimmed numeric strings into numbers', () => {
    expect(normalizeMicrostxInput(' 1500000 ')).toBe(1500000)
  })
})
