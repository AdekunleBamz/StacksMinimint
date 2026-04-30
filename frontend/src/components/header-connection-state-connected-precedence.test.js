import { describe, expect, it } from 'vitest'
import { getHeaderConnectionState } from './Header'

describe('getHeaderConnectionState', () => {
  it('returns connected when account exists even if connecting flag is true', () => {
    expect(getHeaderConnectionState({ hasAccount: true, isConnecting: true })).toBe('connected')
  })
})
