import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('returns generic token copy when identifier is empty', () => {
    expect(getTokenExplorerLinkLabel('')).toBe('Open Token in Explorer')
  })
})
