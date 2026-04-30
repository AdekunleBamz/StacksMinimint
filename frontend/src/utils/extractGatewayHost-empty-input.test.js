import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('returns null for empty string input', () => {
    expect(extractGatewayHost('')).toBeNull()
  })
})
