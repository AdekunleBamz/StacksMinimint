import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('truncates long input using the default max length', () => {
    expect(clampString('x'.repeat(101))).toBe(`${'x'.repeat(100)}…`)
  })
})
