import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('treats undefined values as blank', () => {
    expect(isBlank(undefined)).toBe(true)
  })
})
