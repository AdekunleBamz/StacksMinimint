import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('ignores tab prefixes before capitalization', () => {
    expect(capitalize('\tstacks')).toBe('Stacks')
  })
})
