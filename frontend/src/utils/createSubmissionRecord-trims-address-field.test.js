import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

// Regression note: preserve normalized address storage on submission records.
describe('createSubmissionRecord', () => {
  it('stores the trimmed address value in the returned record', () => {
    const record = createSubmissionRecord({
      txId: '0xabc',
      tokenURI: 'ipfs://bafybeihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku/metadata.json',
      address: '  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ',
    })

    expect(record.address).toBe('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')
  })
})
