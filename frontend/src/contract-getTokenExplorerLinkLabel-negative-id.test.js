import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('stringifies negative numeric token identifiers', () => {
    expect(getTokenExplorerLinkLabel(-1)).toBe('Token: -1')
  })
})
