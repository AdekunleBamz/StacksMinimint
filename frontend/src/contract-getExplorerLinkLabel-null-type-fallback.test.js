import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('falls back to transaction labels when type is null', () => {
    expect(getExplorerLinkLabel(null, 'abc')).toBe('Transaction: abc')
  })
})
