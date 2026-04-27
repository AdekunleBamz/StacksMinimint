import { describe, expect, it } from 'vitest'
import { normalizeExplorerType } from './contract'

describe('normalizeExplorerType', () => {
  it('falls back to txid when an unsupported type is provided', () => {
    expect(normalizeExplorerType('mint')).toBe('txid')
  })
})
