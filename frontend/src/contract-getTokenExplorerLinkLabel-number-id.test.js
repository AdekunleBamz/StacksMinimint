import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('stringifies numeric token identifiers', () => {
    expect(getTokenExplorerLinkLabel(501)).toBe('Token: 501')
  })
})
