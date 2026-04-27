import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('builds token-specific explorer label copy', () => {
    expect(getTokenExplorerLinkLabel(12)).toBe('Token: 12')
  })
})
