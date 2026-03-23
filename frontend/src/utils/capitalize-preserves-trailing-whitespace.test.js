import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('preserves trailing whitespace while trimming only the start', () => {
    expect(capitalize('  stacks  ')).toBe('Stacks  ')
  })
})
