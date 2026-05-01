import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('treats null values as blank', () => {
    expect(isBlank(null)).toBe(true)
  })
})
