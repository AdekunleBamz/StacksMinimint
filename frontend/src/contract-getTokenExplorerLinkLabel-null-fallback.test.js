import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('returns generic copy when token identifier is null', () => {
    expect(getTokenExplorerLinkLabel(null)).toBe('Open Token in Explorer')
  })
})
