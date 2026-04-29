import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('stringifies symbol token identifiers safely', () => {
    expect(getTokenExplorerLinkLabel(Symbol.for('token'))).toBe('Token: Symbol(token)')
  })
})
