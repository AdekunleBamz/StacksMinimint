import { describe, expect, it } from 'vitest'
import { createSubmissionSummary } from './collection'

describe('createSubmissionSummary', () => {
  it('marks summary as local-only when tx id is blank', () => {
    const summary = createSubmissionSummary({
      id: 'local-2',
      txId: '   ',
      tokenURI: 'ipfs://bafy-test/metadata.json'
    })

    expect(summary.txId).toBe('')
    expect(summary.hasTxId).toBe(false)
    expect(summary.isLocalOnly).toBe(true)
  })
})
