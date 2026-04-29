import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('trims surrounding whitespace around token ids', () => {
    expect(getTokenExplorerLinkLabel('  token-9  ')).toBe('Token: token-9')
  })
})
