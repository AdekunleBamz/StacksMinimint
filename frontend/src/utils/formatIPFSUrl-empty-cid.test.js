import { describe, expect, it } from 'vitest'
import { formatIPFSUrl } from './format'

describe('formatIPFSUrl', () => {
  it('returns base scheme when CID is empty', () => {
    expect(formatIPFSUrl('')).toBe('ipfs://')
  })
})
