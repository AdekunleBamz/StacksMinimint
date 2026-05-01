import { describe, expect, it } from 'vitest'
import { isValidMintCount } from './validators'

describe('isValidMintCount', () => {
  it('accepts trimmed numeric strings', () => {
    expect(isValidMintCount(' 5 ')).toBe(true)
  })
})
