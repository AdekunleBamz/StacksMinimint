import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('capitalizes single-character strings', () => {
    expect(capitalize('s')).toBe('S')
  })
})
