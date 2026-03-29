import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI valid ipfs path behavior coverage.
describe('validateTokenURI', () => {
  it('accepts valid ipfs CIDs with nested metadata paths', () => {
    const result = validateTokenURI('ipfs://QmExampleCID/metadata/nft.json')
    expect(result.isValid).toBe(true)
    expect(result.label).toBe('IPFS metadata ready')
  })
})
