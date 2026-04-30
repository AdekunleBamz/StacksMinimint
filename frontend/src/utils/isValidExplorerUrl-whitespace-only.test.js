import { describe, expect, it } from 'vitest'
import { isValidExplorerUrl } from './validators'

describe('isValidExplorerUrl whitespace values', () => {
  it('rejects whitespace-only explorer urls', () => {
    expect(isValidExplorerUrl('   ')).toBe(false)
  })
})
