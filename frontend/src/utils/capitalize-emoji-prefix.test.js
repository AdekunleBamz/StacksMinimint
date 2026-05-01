import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('leaves emoji-prefixed strings unchanged', () => {
    expect(capitalize('🔥mint')).toBe('🔥mint')
  })
})
