import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('coerces object token identifiers with default stringification', () => {
    expect(getTokenExplorerLinkLabel({ token: 1 })).toBe('Token: [object Object]')
  })
})
