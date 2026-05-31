import { describe, expect, it } from 'vitest'
import { getStacksAddress } from './useStacksWallet'

describe('getStacksAddress', () => {
  it('reads the selected Stacks address from a Connect v8 response array', () => {
    expect(getStacksAddress({
      addresses: [
        { symbol: 'BTC', address: 'bc1qexampleaddress', publicKey: 'btc-key' },
        { symbol: 'STX', address: ' SP2CONNECTV8ADDRESS1234567890 ', publicKey: 'stx-key' }
      ]
    })).toBe('SP2CONNECTV8ADDRESS1234567890')
  })

  it('reads the selected Stacks address from Connect local storage groups', () => {
    expect(getStacksAddress({
      addresses: {
        stx: [
          { address: ' ST2STORAGEADDRESS1234567890 ', publicKey: 'stx-key' }
        ],
        btc: [
          { address: 'tb1qexampleaddress', publicKey: 'btc-key' }
        ]
      }
    })).toBe('ST2STORAGEADDRESS1234567890')
  })

  it('reads wallet storage groups named stacks', () => {
    expect(getStacksAddress({
      addresses: {
        stacks: [
          { address: ' SP2STACKSGROUPADDRESS1234567890 ', publicKey: 'stx-key' }
        ],
        bitcoin: [
          { address: 'bc1qexampleaddress', publicKey: 'btc-key' }
        ]
      }
    })).toBe('SP2STACKSGROUPADDRESS1234567890')
  })

  it('reads wallet account response shapes when addresses are omitted', () => {
    expect(getStacksAddress({
      accounts: [
        { address: ' SP2ACCOUNTADDRESS1234567890 ', publicKey: 'stx-key' }
      ]
    })).toBe('SP2ACCOUNTADDRESS1234567890')
  })

  it('reads JSON-RPC result envelopes from wallet providers', () => {
    expect(getStacksAddress({
      result: {
        addresses: [
          { address: ' SP2RPCRESULTADDRESS1234567890 ', publicKey: 'stx-key' }
        ]
      }
    })).toBe('SP2RPCRESULTADDRESS1234567890')
  })

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

  it('falls back when the preferred address is newline-only', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '\n\n',
          testnet: 'ST2NEWLINEFALLBACK1234567890'
        }
      }
    })).toBe('ST2NEWLINEFALLBACK1234567890')
  })

  it('falls back when the preferred network address is missing', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          testnet: ' ST2ONLYFALLBACK1234567890 '
        }
      }
    })).toBe('ST2ONLYFALLBACK1234567890')
  })

  it('returns null when the preferred address is blank and no fallback exists', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '   '
        }
      }
    })).toBeNull()
  })

  it('returns null when no profile data exists', () => {
    expect(getStacksAddress(null)).toBeNull()
    expect(getStacksAddress({})).toBeNull()
  })

  it('returns null when profile is null', () => {
    expect(getStacksAddress({ profile: null })).toBeNull()
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

  it('returns null when fallback address is blank after a non-string preferred value', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: {},
          testnet: '   '
        }
      }
    })).toBeNull()
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

  it('returns null when stxAddress is not an address map', () => {
    expect(getStacksAddress({ profile: { stxAddress: 'SP2NOTAMAP1234567890' } })).toBeNull()
  })

  it('returns null when stxAddress itself is null', () => {
    expect(getStacksAddress({ profile: { stxAddress: null } })).toBeNull()
  })

  it('trims fallback wallet addresses containing tab/newline characters', () => {
    expect(getStacksAddress({
      profile: {
        stxAddress: {
          mainnet: '',
          testnet: '\n\tST2TRIMMEDFALLBACK1234567890\t\n'
        }
      }
    })).toBe('ST2TRIMMEDFALLBACK1234567890')
  })
})
