import { describe, expect, it } from 'vitest'
import { normalizeExplorerType } from './contract'

describe('normalizeExplorerType', () => {
  it('falls back when explorer type includes surrounding whitespace', () => {
    expect(normalizeExplorerType(' txid ')).toBe('txid')
  })
})
