import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('coerces empty array ids to empty string content without fallback', () => {
    expect(getTokenExplorerLinkLabel([])).toBe('Token: ')
  })
})
