import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('preserves trailing spaces while trimming leading whitespace', () => {
    expect(capitalize('  hello  ')).toBe('Hello  ')
  })
})
