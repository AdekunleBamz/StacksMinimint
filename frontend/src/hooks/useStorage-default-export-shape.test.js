import { describe, expect, it } from 'vitest'
import storageHooks, { useLocalStorage, useSessionStorage } from './useStorage'

describe('useStorage module exports', () => {
  it('exposes both storage hooks on the default export object', () => {
    expect(storageHooks.useLocalStorage).toBe(useLocalStorage)
    expect(storageHooks.useSessionStorage).toBe(useSessionStorage)
  })
})
