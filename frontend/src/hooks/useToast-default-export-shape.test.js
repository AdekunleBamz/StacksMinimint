import { describe, expect, it } from 'vitest'
import useToastDefault, { useToast } from './useToast'

describe('useToast module exports', () => {
  it('keeps default export aligned with named hook export', () => {
    expect(useToastDefault).toBe(useToast)
  })
})
