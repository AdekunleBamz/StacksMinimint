import { describe, expect, it } from 'vitest'
import { normalizeSubmissionTokenURI } from './collection'

describe('normalizeSubmissionTokenURI', () => {
  it('trims newline padding around token URIs', () => {
    expect(normalizeSubmissionTokenURI('\nhttps://example.com/meta.json\n')).toBe('https://example.com/meta.json')
  })
})
