import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('accepts lowercase testnet addresses after normalization', () => {
    expect(isValidStacksAddress('st5k2rhmsbh4pap4pgx77mcvnk1zeed07cwx9tjt')).toBe(true)
  })
})
