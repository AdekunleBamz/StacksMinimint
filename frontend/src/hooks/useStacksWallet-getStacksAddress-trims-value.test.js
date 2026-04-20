import { describe, expect, it } from 'vitest'
import { getStacksAddress } from './useStacksWallet'

describe('getStacksAddress', () => {
  it('trims the configured network address before returning it', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '  SP3FBR2AGK4B2Y6A4J91G4FJ3P1N5X4K8TB8Z3YQH  '
        }
      }
    })).toBe('SP3FBR2AGK4B2Y6A4J91G4FJ3P1N5X4K8TB8Z3YQH')
  })

  it('falls back to the other network address when the preferred one is empty', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '   ',
          testnet: ' ST2PABCD1234EFGH5678IJKL9012MNOP3456QRST '
        }
      }
    })).toBe('ST2PABCD1234EFGH5678IJKL9012MNOP3456QRST')
  })

  it('returns null when no profile data exists', () => {
    expect(getStacksAddress(null)).toBeNull()
    expect(getStacksAddress({})).toBeNull()
  })

  it('returns null when both network addresses are non-string values', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: 123,
          testnet: false
        }
      }
    })).toBeNull()
  })

  it('prefers a non-empty mainnet address when both are present', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: ' SP2MAINNETVALUE1234567890 ',
          testnet: ' ST2TESTNETVALUE1234567890 '
        }
      }
    })).toBe('SP2MAINNETVALUE1234567890')
  })

  it('falls back to a trimmed alternate address when preferred address is non-string', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: 0,
          testnet: ' ST2FALLBACKVALUE1234567890 '
        }
      }
    })).toBe('ST2FALLBACKVALUE1234567890')
  })

  it('returns null when both network addresses are blank strings', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '   ',
          testnet: '\n\t'
        }
      }
    })).toBeNull()
  })

  it('returns null when stxAddress map is missing', () => {
    expect(getStacksAddress({ profile: {} })).toBeNull()
  })

  it('returns null when stxAddress itself is null', () => {
    expect(getStacksAddress({ profile: { stxAddress: null } })).toBeNull()
  })
})
