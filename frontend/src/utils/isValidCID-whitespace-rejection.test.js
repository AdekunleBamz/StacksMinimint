import { describe, expect, it } from 'vitest'
import { isValidCID } from './validators'

describe('isValidCID', () => {
  it('rejects whitespace-only CID values', () => {
    expect(isValidCID('           ')).toBe(false)
  })
})
