import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

describe('createSubmissionRecord', () => {
  it('falls back to a local id when txId is only whitespace', () => {
    const record = createSubmissionRecord({
      txId: '   ',
      tokenURI: 'https://example.com/meta.json',
      address: 'SP3TESTADDRESS'
    })

    expect(record.id.startsWith('local-')).toBe(true)
    expect(record.txId).toBe('')
  })
})
