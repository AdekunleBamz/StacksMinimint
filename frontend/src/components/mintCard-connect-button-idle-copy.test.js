import { describe, expect, it } from 'vitest'
import { getMintConnectButtonA11y } from './MintCard'

describe('getMintConnectButtonA11y', () => {
  it('returns idle connect copy when wallet connection is not pending', () => {
    expect(getMintConnectButtonA11y(false)).toEqual({
      label: 'Connect wallet to mint',
      title: 'Connect wallet to enable minting'
    })
  })
})
