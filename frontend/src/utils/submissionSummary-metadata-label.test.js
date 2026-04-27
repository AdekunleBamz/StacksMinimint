import { describe, expect, it } from 'vitest'
import { createSubmissionSummary } from './collection'

describe('createSubmissionSummary', () => {
  it('exposes metadata kind and label from the token URI', () => {
    const summary = createSubmissionSummary({
      id: 'tx-1',
      txId: '0x123',
      tokenURI: 'ipfs://bafybeigdyrzt5u2'
    })

    expect(summary.metadataKind).toBe('ipfs')
    expect(summary.metadataLabel).toBe('IPFS metadata')
  })
})
