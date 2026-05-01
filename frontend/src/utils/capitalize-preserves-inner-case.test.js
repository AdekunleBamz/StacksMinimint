import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('changes only the first character casing', () => {
    expect(capitalize('mINT')).toBe('MINT')
  })
})
