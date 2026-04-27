import { describe, expect, it } from 'vitest'
import { getMintConnectButtonA11y } from './MintCard'

describe('getMintConnectButtonA11y', () => {
  it('returns connecting descriptor copy while wallet auth is pending', () => {
    expect(getMintConnectButtonA11y(true)).toEqual({
      label: 'Connecting wallet',
      title: 'Waiting for wallet connection'
    })
  })
})
