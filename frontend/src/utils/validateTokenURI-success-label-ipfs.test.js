import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('returns the IPFS success label for valid IPFS URIs', () => {
    expect(validateTokenURI('ipfs://QmValidCid').label).toBe('IPFS metadata ready')
  })
})
