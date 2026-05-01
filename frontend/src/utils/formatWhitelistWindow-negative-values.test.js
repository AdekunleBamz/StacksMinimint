import { describe, expect, it } from 'vitest'
import { formatWhitelistWindow } from './format'

describe('formatWhitelistWindow', () => {
  it('formats negative boundaries after numeric coercion', () => {
    expect(formatWhitelistWindow('-2', '-1')).toBe('WL -2--1')
  })
})
