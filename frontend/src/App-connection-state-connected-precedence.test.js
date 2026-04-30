import { describe, expect, it } from 'vitest'
import { getAppConnectionState } from './App'

describe('getAppConnectionState', () => {
  it('returns connected when account is connected even if connect flag is true', () => {
    expect(getAppConnectionState({ isConnected: true, isConnecting: true })).toBe('connected')
  })
})
