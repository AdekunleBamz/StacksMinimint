import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('treats whitespace-only strings as blank', () => {
    expect(isBlank('   ')).toBe(true)
  })
})
