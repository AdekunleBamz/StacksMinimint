import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders true boolean identifiers as transaction label text', () => {
    expect(getTxExplorerLinkLabel(true)).toBe('Transaction: true')
  })
})
