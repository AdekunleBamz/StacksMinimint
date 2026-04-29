import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('supports bigint token identifiers', () => {
    expect(getTokenExplorerLinkLabel(9007199254741999n)).toBe('Token: 9007199254741999')
  })
})
