import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord keeps txid field behavior coverage.
// Scope note: validates createSubmissionRecord keeps txid field behavior for regressions.
describe('createSubmissionRecord', () => {
  it('keeps the original txId value when provided', () => {
    const record = createSubmissionRecord({ txId: '0xabc', tokenURI: 'https://example.com', address: 'SP123' })
    expect(record.txId).toBe('0xabc')
  })
})
