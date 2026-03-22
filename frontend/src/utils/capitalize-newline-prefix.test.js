import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('ignores leading newline characters before capitalizing', () => {
    expect(capitalize('\nstacks')).toBe('Stacks')
  })
})
