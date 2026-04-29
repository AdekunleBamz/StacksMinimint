import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('returns generic copy when tx identifier is undefined', () => {
    expect(getTxExplorerLinkLabel(undefined)).toBe('Open Transaction in Explorer')
  })
})
