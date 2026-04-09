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
})
