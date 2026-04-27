import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('uses the default cap when maxLength is invalid', () => {
    expect(clampString('x'.repeat(120), -5)).toHaveLength(101)
  })
})
