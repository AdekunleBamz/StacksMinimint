import { describe, expect, it } from 'vitest'
import { getHeaderWalletStatus } from './Header'

describe('getHeaderWalletStatus', () => {
  it('returns disconnected status copy when no account is connected', () => {
    expect(getHeaderWalletStatus(false)).toEqual({
      text: 'Wallet disconnected',
      title: 'Wallet is disconnected'
    })
  })
})
