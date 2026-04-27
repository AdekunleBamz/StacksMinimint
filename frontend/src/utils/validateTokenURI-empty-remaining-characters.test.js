import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('reports full character budget for empty metadata input', () => {
    const result = validateTokenURI('')

    expect(result.remainingCharacters).toBe(256)
  })
})
