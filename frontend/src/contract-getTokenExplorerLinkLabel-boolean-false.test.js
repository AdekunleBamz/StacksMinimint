import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('keeps false boolean token identifiers visible', () => {
    expect(getTokenExplorerLinkLabel(false)).toBe('Token: false')
  })
})
