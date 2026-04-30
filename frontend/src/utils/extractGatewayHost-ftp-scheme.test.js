import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('extracts hostnames from non-http URLs when parseable', () => {
    expect(extractGatewayHost('ftp://mirror.example.net/resource')).toBe('mirror.example.net')
  })
})
