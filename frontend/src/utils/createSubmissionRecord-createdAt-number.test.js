import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve createSubmissionRecord createdAt number behavior coverage.
// Scope note: validates createSubmissionRecord createdAt number behavior for regressions.
describe('createSubmissionRecord', () => {
  it('captures createdAt as a numeric timestamp', () => {
    const record = createSubmissionRecord({ txId: '0x2', tokenURI: 'https://example.com', address: 'SP123' })
    expect(typeof record.createdAt).toBe('number')
  })
})
