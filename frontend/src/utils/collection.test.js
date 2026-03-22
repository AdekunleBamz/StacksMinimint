import { describe, it, expect } from 'vitest'
import { formatAddress, formatExactTime, formatRelativeTime, formatSTX, getMetadataGatewayUrl, getMetadataKind, getMetadataLabel, validateTokenURI } from './collection'

describe('collection utility', () => {
  describe('formatSTX', () => {
    it('formats microstx values safely', () => {
      expect(formatSTX(0)).toBe('0')
      expect(formatSTX(1000000)).toBe('1')
      expect(formatSTX(2500000)).toBe('2.5')
    })

    it('returns zero for non-finite inputs', () => {
      expect(formatSTX(Number.POSITIVE_INFINITY)).toBe('0')
      expect(formatSTX(Number.NEGATIVE_INFINITY)).toBe('0')
    })
  })

  describe('formatAddress', () => {
    it('supports truncation without a suffix segment', () => {
      expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, 0)).toBe('SP5K...')
    })

    it('trims surrounding spaces before formatting addresses', () => {
      expect(formatAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ', 4, 4)).toBe('SP5K...9TJT')
    })
  })

  describe('getMetadataKind', () => {
    it('detects known schemes', () => {
      expect(getMetadataKind('ipfs://abc')).toBe('ipfs')
      expect(getMetadataKind('https://example.com')).toBe('https')
      expect(getMetadataKind('http://example.com')).toBe('http')
      expect(getMetadataKind('')).toBe('empty')
    })

    it('treats whitespace-only metadata as empty', () => {
      expect(getMetadataKind('   ')).toBe('empty')
    })
  })

  describe('validateTokenURI', () => {
    it('accepts secure ipfs and https links', () => {
      expect(validateTokenURI('ipfs://cid').isValid).toBe(true)
      expect(validateTokenURI('https://example.com/meta.json').isValid).toBe(true)
    })

    it('accepts uppercase secure schemes', () => {
      expect(validateTokenURI('IPFS://cid').isValid).toBe(true)
      expect(validateTokenURI('HTTPS://example.com/meta.json').isValid).toBe(true)
    })

    it('rejects unsupported schemes', () => {
      const result = validateTokenURI('ftp://example.com')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Unsupported scheme')
    })

    it('rejects malformed https metadata URLs', () => {
      const result = validateTokenURI('https://exa mple.com/meta.json')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Invalid metadata URL')
    })

    it('rejects ipfs URIs without a CID path', () => {
      const result = validateTokenURI('ipfs://')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Invalid IPFS URI')
    })

    it('rejects https metadata URLs with embedded credentials', () => {
      const result = validateTokenURI('https://user:pass@example.com/meta.json')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Remove URL credentials')
    })
  })

  describe('getMetadataGatewayUrl', () => {
    it('normalizes ipfs://ipfs paths to a single gateway prefix', () => {
      expect(getMetadataGatewayUrl('ipfs://ipfs/QmExample')).toBe('https://ipfs.io/ipfs/QmExample')
    })
  })

  describe('getMetadataLabel', () => {
    it('extracts host labels from padded web URLs', () => {
      expect(getMetadataLabel('  https://www.example.com/meta.json  ')).toBe('example.com')
    })
  })

  describe('formatRelativeTime', () => {
    it('returns Just now for fresh timestamps', () => {
      expect(formatRelativeTime(Date.now())).toBe('Just now')
    })

    it('accepts Unix timestamps provided in seconds', () => {
      const oneMinuteAgoSeconds = Math.floor(Date.now() / 1000) - 60
      expect(formatRelativeTime(oneMinuteAgoSeconds)).toBe('1m ago')
    })
  })

  describe('formatExactTime', () => {
    it('formats to a readable string', () => {
      const formatted = formatExactTime(Date.now())
      expect(typeof formatted).toBe('string')
      expect(formatted.length).toBeGreaterThan(0)
    })

    it('accepts Unix timestamps provided in seconds', () => {
      const formatted = formatExactTime(Math.floor(Date.now() / 1000))
      expect(formatted).not.toBe('Unknown time')
    })

    it('formats second and millisecond timestamps equivalently', () => {
      const unixSeconds = 1710000000
      expect(formatExactTime(unixSeconds)).toBe(formatExactTime(unixSeconds * 1000))
    })
  })
})
