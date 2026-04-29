import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('preserves internal newline characters in token identifiers', () => {
    expect(getTokenExplorerLinkLabel('token\n42')).toBe('Token: token\n42')
  })
})
