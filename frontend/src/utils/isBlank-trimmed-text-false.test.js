import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('returns false for strings containing non-whitespace text', () => {
    expect(isBlank('\t mint \n')).toBe(false)
  })
})
