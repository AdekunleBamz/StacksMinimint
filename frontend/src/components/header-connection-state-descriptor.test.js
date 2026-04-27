import { describe, expect, it } from 'vitest'
import { getHeaderConnectionState } from './Header'

describe('getHeaderConnectionState', () => {
  it('returns connecting when wallet is not yet connected but connect flow is active', () => {
    expect(getHeaderConnectionState({ hasAccount: false, isConnecting: true })).toBe('connecting')
  })
})
