import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress newline trim behavior coverage.
describe('isValidStacksAddress', () => {
  it('accepts valid addresses wrapped in newline whitespace', () => {
    const wrapped = '\nsp5k2rhmsbh4pap4pgx77mcvnk1zeed07cwx9tjt\n'
    expect(isValidStacksAddress(wrapped)).toBe(true)
  })
})
