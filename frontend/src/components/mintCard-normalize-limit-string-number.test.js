import { describe, expect, it } from 'vitest'
import { normalizeMintLimitValue } from './MintCard'

describe('normalizeMintLimitValue', () => {
  it('parses numeric string limits to number values', () => {
    expect(normalizeMintLimitValue('25')).toBe(25)
  })
})
