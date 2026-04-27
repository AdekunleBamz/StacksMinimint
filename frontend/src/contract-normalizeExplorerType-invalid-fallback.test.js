import { describe, expect, it } from 'vitest'
import { normalizeExplorerType } from './contract'

describe('normalizeExplorerType', () => {
  it('falls back to txid for unsupported explorer types', () => {
    expect(normalizeExplorerType('collection')).toBe('txid')
  })
})
