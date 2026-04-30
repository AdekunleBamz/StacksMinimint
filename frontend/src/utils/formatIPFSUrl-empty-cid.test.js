import { describe, expect, it } from 'vitest'
import { formatIPFSUrl } from './format'

describe('formatIPFSUrl', () => {
  it('keeps scheme output when CID is empty', () => {
    expect(formatIPFSUrl('')).toBe('ipfs://')
  })
})
