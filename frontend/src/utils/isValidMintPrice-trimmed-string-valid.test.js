import { describe, expect, it } from 'vitest'
import { isValidMintPrice } from './validators'

describe('isValidMintPrice', () => {
  it('accepts trimmed numeric price strings', () => {
    expect(isValidMintPrice(' 1.5 ')).toBe(true)
  })
})
