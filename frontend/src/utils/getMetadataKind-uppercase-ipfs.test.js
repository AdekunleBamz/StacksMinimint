import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('detects ipfs URIs regardless of scheme casing', () => {
    expect(getMetadataKind('IPFS://QmExampleCid')).toBe('ipfs')
  })
})
