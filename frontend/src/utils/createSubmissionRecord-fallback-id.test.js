import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord fallback id behavior coverage.
// Scope note: validates createSubmissionRecord fallback id behavior for regressions.
describe('createSubmissionRecord', () => {
  it('generates a local fallback id when txId is missing', () => {
    const record = createSubmissionRecord({ tokenURI: 'ipfs://QmCid', address: 'SP123' })
    expect(record.id.startsWith('local-')).toBe(true)
  })
})
