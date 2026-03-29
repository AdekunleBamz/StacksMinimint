import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord fallback id unknown address behavior coverage.
// Scope note: validates createSubmissionRecord fallback id unknown address behavior for regressions.
describe('createSubmissionRecord', () => {
  it('uses unknown in fallback ids when address is missing', () => {
    const record = createSubmissionRecord({ tokenURI: 'https://example.com' })
    expect(record.id).toContain('unknown')
  })
})
