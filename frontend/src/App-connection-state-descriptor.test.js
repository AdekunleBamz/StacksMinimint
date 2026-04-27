import { describe, expect, it } from 'vitest'
import { getAppConnectionState } from './App'

describe('getAppConnectionState', () => {
  it('returns connecting when wallet handshake is in progress', () => {
    expect(getAppConnectionState({ isConnected: false, isConnecting: true })).toBe('connecting')
  })
})
