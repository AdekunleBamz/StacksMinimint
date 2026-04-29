import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders token label copy for token identifiers', () => {
    expect(getExplorerLinkLabel('token', 'token-42')).toBe('Token: token-42')
  })
})
