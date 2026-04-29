import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('trims surrounding whitespace around tx ids', () => {
    expect(getTxExplorerLinkLabel('  0xabc  ')).toBe('Transaction: 0xabc')
  })
})
