import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('renders true boolean identifiers for token labels', () => {
    expect(getTokenExplorerLinkLabel(true)).toBe('Token: true')
  })
})
