import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord metadata fields behavior coverage.
// Scope note: validates createSubmissionRecord metadata fields behavior for regressions.
describe('createSubmissionRecord', () => {
  it('captures metadata kind and label fields from URI', () => {
    const record = createSubmissionRecord({ txId: '0xabc', tokenURI: 'https://example.com/meta.json', address: 'SP123' })
    expect(record.metadataKind).toBe('https')
    expect(record.metadataLabel).toBe('example.com')
  })
})
