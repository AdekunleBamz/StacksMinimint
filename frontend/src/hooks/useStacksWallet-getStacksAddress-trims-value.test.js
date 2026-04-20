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
})
