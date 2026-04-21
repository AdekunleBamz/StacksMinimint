import { describe, expect, it } from 'vitest'
import { isValidCID, isValidOwnerAddress, isValidProvenanceHash } from './validators'

// Regression note: preserve hardened validators for CID, owner address, and provenance hash.
describe('validators hardening', () => {
  it('accepts trimmed CID values', () => {
    expect(isValidCID('  bafybeihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku  ')).toBe(true)
  })

  it('requires valid Stacks owner addresses', () => {
    expect(isValidOwnerAddress(' SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT ')).toBe(true)
    expect(isValidOwnerAddress('not-a-wallet')).toBe(false)
  })

  it('requires hex-only provenance hashes', () => {
    expect(isValidProvenanceHash('f'.repeat(64))).toBe(true)
    expect(isValidProvenanceHash('g'.repeat(64))).toBe(false)
  })
})
