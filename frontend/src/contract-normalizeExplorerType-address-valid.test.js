import { describe, expect, it } from 'vitest'
import { normalizeExplorerType } from './contract'

describe('normalizeExplorerType', () => {
  it('keeps address type unchanged when type is valid', () => {
    expect(normalizeExplorerType('address')).toBe('address')
  })
})
