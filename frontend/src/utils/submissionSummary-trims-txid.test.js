import { describe, expect, it } from 'vitest'
import { createSubmissionSummary } from './collection'

describe('createSubmissionSummary', () => {
  it('trims transaction ids before exposing summary fields', () => {
    const summary = createSubmissionSummary({
      id: 'local-1',
      txId: '  0xabc123  ',
      tokenURI: 'https://example.com/metadata.json'
    })

    expect(summary.txId).toBe('0xabc123')
    expect(summary.hasTxId).toBe(true)
  })
})
