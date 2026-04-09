import { describe, expect, it } from 'vitest'
import { createSubmissionRecord } from './collection'

describe('createSubmissionRecord', () => {
  it('trims wallet addresses before using them in fallback ids', () => {
    const record = createSubmissionRecord({
      tokenURI: 'https://example.com/meta.json',
      address: '  SP3TESTADDRESS  '
    })

    expect(record.id).toContain('SP3TESTADDRESS')
    expect(record.id).not.toContain('  SP3TESTADDRESS  ')
  })
})
