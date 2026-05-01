import { describe, expect, it } from 'vitest'
import { MINT_FEE } from './index.js'

describe('constants mint fee', () => {
  it('keeps MINT_FEE as a non-negative integer micro-STX value', () => {
    expect(Number.isInteger(MINT_FEE)).toBe(true)
    expect(MINT_FEE).toBeGreaterThanOrEqual(0)
  })
})
