import { describe, expect, it } from 'vitest'
import { useWallet } from './index'
import { useStacksWallet } from './useStacksWallet'

describe('hooks barrel exports', () => {
  it('re-exports useStacksWallet as useWallet alias', () => {
    expect(useWallet).toBe(useStacksWallet)
  })
})
