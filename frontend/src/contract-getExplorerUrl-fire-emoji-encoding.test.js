import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes fire emoji characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx🔥id")).toBe("https://explorer.hiro.so/txid/tx%F0%9F%94%A5id?chain=mainnet")
  })
})
