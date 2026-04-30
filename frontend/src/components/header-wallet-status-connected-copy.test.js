import { describe, expect, it } from 'vitest'
import { getHeaderWalletStatus } from './Header'

describe('getHeaderWalletStatus', () => {
  it('returns connected status copy when account is present', () => {
    expect(getHeaderWalletStatus(true)).toEqual({
      text: 'Wallet ready',
      title: 'Wallet is connected and ready'
    })
  })
})
