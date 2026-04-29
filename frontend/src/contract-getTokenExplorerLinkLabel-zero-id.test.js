import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('treats numeric zero as a valid token identifier', () => {
    expect(getTokenExplorerLinkLabel(0)).toBe('Token: 0')
  })
})
