import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('returns generic copy when token identifier is undefined', () => {
    expect(getTokenExplorerLinkLabel(undefined)).toBe('Open Token in Explorer')
  })
})
