import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

describe('createSubmissionRecord', () => {
  it('uses unknown in fallback ids when address is missing', () => {
    const record = createSubmissionRecord({ tokenURI: 'https://example.com' })
    expect(record.id).toContain('unknown')
  })
})
