import { describe, expect, it } from 'vitest'
import { appendRecentMintResult } from './App'

describe('appendRecentMintResult', () => {
  it('returns a new array without mutating previous entries', () => {
    const previousItems = [{ txId: '0x1' }, { txId: '0x2' }]
    const snapshot = [...previousItems]

    const nextItems = appendRecentMintResult(previousItems, { txId: '0x3' })

    expect(nextItems).not.toBe(previousItems)
    expect(previousItems).toEqual(snapshot)
    expect(nextItems[0]).toEqual({ txId: '0x3' })
  })
})
