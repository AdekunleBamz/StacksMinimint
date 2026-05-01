import { describe, expect, it } from 'vitest'
import { isValidTxId } from './validators'

describe('isValidTxId', () => {
  it('rejects tx ids containing non-hex characters', () => {
    expect(isValidTxId(`0x${'f'.repeat(63)}z`)).toBe(false)
  })
})
