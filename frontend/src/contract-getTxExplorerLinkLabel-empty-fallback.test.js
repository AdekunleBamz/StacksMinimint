import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('falls back to generic transaction explorer copy for empty ids', () => {
    expect(getTxExplorerLinkLabel('')).toBe('Open Transaction in Explorer')
  })
})
