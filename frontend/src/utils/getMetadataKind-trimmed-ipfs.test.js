import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind trimmed ipfs behavior coverage.
describe('getMetadataKind', () => {
  it('detects IPFS URIs after trimming surrounding spaces', () => {
    expect(getMetadataKind('  ipfs://QmExample  ')).toBe('ipfs')
  })
})
