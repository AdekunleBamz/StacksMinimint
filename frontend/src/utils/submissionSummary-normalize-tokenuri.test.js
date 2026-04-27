import { describe, expect, it } from 'vitest'
import { normalizeSubmissionTokenURI } from './collection'

describe('normalizeSubmissionTokenURI', () => {
  it('trims token URI values before storing submission metadata', () => {
    expect(normalizeSubmissionTokenURI('  ipfs://bafy-test/metadata.json  ')).toBe('ipfs://bafy-test/metadata.json')
  })
})
