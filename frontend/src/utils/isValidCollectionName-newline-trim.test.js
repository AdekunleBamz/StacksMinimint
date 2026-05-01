import { describe, expect, it } from 'vitest'
import { isValidCollectionName } from './validators'

describe('isValidCollectionName', () => {
  it('accepts names wrapped in newlines after trim', () => {
    expect(isValidCollectionName('\nMini Mint\n')).toBe(true)
  })
})
