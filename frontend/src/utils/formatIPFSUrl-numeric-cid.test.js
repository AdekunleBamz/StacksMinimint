import { describe, expect, it } from 'vitest'
import { formatIPFSUrl } from './format'

describe('formatIPFSUrl', () => {
  it('coerces numeric cid values when building ipfs url', () => {
    expect(formatIPFSUrl(12345)).toBe('ipfs://12345')
  })
})
