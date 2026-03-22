import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

describe('createSubmissionRecord', () => {
  it('stores empty metadata kind when token URI is absent', () => {
    const record = createSubmissionRecord({
      txId: '0x1',
      tokenURI: '',
      address: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    })

    expect(record.metadataKind).toBe('empty')
  })
})
