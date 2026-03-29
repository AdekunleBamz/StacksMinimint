import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord kind unknown uri behavior coverage.
// Scope note: validates createSubmissionRecord kind unknown uri behavior for regressions.
describe('createSubmissionRecord', () => {
  it('stores unknown metadata kind for unsupported schemes', () => {
    const record = createSubmissionRecord({ txId: '0x1', tokenURI: 'ftp://example.com', address: 'SP123' })
    expect(record.metadataKind).toBe('unknown')
  })
})
