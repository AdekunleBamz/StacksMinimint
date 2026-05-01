import { describe, expect, it } from 'vitest'
import { normalizeExplorerType } from './contract'

describe('normalizeExplorerType', () => {
  it('keeps token type unchanged when type is valid', () => {
    expect(normalizeExplorerType('token')).toBe('token')
  })
})
