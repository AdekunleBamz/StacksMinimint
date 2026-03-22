import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('capitalizes values prefixed by carriage return characters', () => {
    expect(capitalize('\rhello')).toBe('Hello')
  })
})
