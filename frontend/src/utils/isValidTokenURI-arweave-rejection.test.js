import { describe, expect, it } from 'vitest'
import { isValidTokenURI } from './validators'

describe('isValidTokenURI', () => {
  it('rejects ar:// URIs in strict validator checks', () => {
    expect(isValidTokenURI('ar://some-arweave-id')).toBe(false)
  })
})
