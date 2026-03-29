import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord explicit id behavior coverage.
// Scope note: validates createSubmissionRecord explicit id behavior for regressions.
describe('createSubmissionRecord', () => {
  it('uses the transaction id directly when provided', () => {
    const record = createSubmissionRecord({
      txId: '0xabc123',
      tokenURI: 'https://example.com/meta.json',
      address: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    })

    expect(record.id).toBe('0xabc123')
    expect(record.txId).toBe('0xabc123')
  })
})
