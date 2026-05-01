import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('treats empty strings as blank values', () => {
    expect(isBlank('')).toBe(true)
  })
})
