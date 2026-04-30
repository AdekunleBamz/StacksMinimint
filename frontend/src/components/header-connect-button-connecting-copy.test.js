import { describe, expect, it } from 'vitest'
import { getHeaderConnectButtonA11y } from './Header'

describe('getHeaderConnectButtonA11y', () => {
  it('returns connecting label and title while wallet auth is pending', () => {
    expect(getHeaderConnectButtonA11y(true)).toEqual({
      label: 'Connecting wallet',
      title: 'Connecting wallet'
    })
  })
})
