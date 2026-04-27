import { describe, expect, it } from 'vitest'
import { normalizeMintLimitValue } from './MintCard'

describe('normalizeMintLimitValue', () => {
  it('returns null for non-numeric limit values', () => {
    expect(normalizeMintLimitValue('not-a-number')).toBeNull()
  })
})
