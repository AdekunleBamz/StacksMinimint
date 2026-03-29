import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord fallback id address behavior coverage.
// Scope note: validates createSubmissionRecord fallback id address behavior for regressions.
describe('createSubmissionRecord', () => {
  it('includes the wallet address in fallback ids', () => {
    const record = createSubmissionRecord({ tokenURI: 'https://example.com', address: 'SP3TESTADDRESS' })
    expect(record.id).toContain('SP3TESTADDRESS')
  })
})
