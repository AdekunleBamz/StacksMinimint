import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

describe('createSubmissionRecord', () => {
  it('generates a local fallback id when txId is missing', () => {
    const record = createSubmissionRecord({ tokenURI: 'ipfs://QmCid', address: 'SP123' })
    expect(record.id.startsWith('local-')).toBe(true)
  })
})
