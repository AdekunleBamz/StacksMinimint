import { describe, expect, it } from 'vitest'
import { getHeaderConnectButtonA11y } from './Header'

describe('getHeaderConnectButtonA11y', () => {
  it('returns idle connect labels when wallet is not connecting', () => {
    expect(getHeaderConnectButtonA11y(false)).toEqual({
      label: 'Connect wallet',
      title: 'Connect wallet'
    })
  })
})
