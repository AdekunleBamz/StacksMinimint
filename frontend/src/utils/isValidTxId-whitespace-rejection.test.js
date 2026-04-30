import { describe, expect, it } from 'vitest'
import { isValidTxId } from './validators'

describe('isValidTxId', () => {
  it('rejects tx ids with surrounding whitespace', () => {
    expect(isValidTxId(` 0x${'a'.repeat(64)} `)).toBe(false)
  })
})
