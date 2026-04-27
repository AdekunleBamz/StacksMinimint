import { describe, expect, it } from 'vitest'
import { appendRecentMintResult } from './App'

describe('appendRecentMintResult', () => {
  it('prepends the newest mint and keeps only the configured recent limit', () => {
    const previousItems = [
      { txId: '0x1' },
      { txId: '0x2' },
      { txId: '0x3' },
      { txId: '0x4' },
      { txId: '0x5' },
      { txId: '0x6' }
    ]

    const nextItems = appendRecentMintResult(previousItems, { txId: '0x7' })

    expect(nextItems).toHaveLength(6)
    expect(nextItems[0]).toEqual({ txId: '0x7' })
    expect(nextItems.at(-1)).toEqual({ txId: '0x5' })
  })
})
