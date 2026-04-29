import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('falls back to transaction label when type is unknown', () => {
    expect(getExplorerLinkLabel('wallet', 'abc123')).toBe('Transaction: abc123')
  })
})
