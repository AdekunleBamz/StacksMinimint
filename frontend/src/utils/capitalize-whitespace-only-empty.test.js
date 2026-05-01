import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('returns empty output for whitespace-only strings', () => {
    expect(capitalize('   ')).toBe('')
  })
})
