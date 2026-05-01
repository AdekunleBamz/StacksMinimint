import { describe, expect, it } from 'vitest'
import { isValidBlockHeight } from './validators'

describe('isValidBlockHeight', () => {
  it('accepts block heights with leading zeros', () => {
    expect(isValidBlockHeight('0007')).toBe(true)
  })
})
