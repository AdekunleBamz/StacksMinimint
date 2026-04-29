import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('supports bigint identifiers in label output', () => {
    expect(getExplorerLinkLabel('token', 9007199254740993n)).toBe('Token: 9007199254740993')
  })
})
