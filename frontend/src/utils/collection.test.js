import { describe, it, expect } from 'vitest'
import { formatExactTime, formatRelativeTime, formatSTX, getMetadataKind, validateTokenURI } from './collection'

describe('collection utility', () => {
  describe('formatSTX', () => {
    it('formats microstx values safely', () => {
      expect(formatSTX(0)).toBe('0')
      expect(formatSTX(1000000)).toBe('1')
      expect(formatSTX(2500000)).toBe('2.5')
    })
  })

  describe('getMetadataKind', () => {
    it('detects known schemes', () => {
      expect(getMetadataKind('ipfs://abc')).toBe('ipfs')
      expect(getMetadataKind('https://example.com')).toBe('https')
      expect(getMetadataKind('http://example.com')).toBe('http')
      expect(getMetadataKind('')).toBe('empty')
    })
  })

  describe('validateTokenURI', () => {
    it('accepts secure ipfs and https links', () => {
      expect(validateTokenURI('ipfs://cid').isValid).toBe(true)
      expect(validateTokenURI('https://example.com/meta.json').isValid).toBe(true)
    })

    it('rejects unsupported schemes', () => {
      const result = validateTokenURI('ftp://example.com')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Unsupported scheme')
    })
  })

  describe('formatRelativeTime', () => {
    it('returns Just now for fresh timestamps', () => {
      expect(formatRelativeTime(Date.now())).toBe('Just now')
    })
  })

  describe('formatExactTime', () => {
    it('formats to a readable string', () => {
      const formatted = formatExactTime(Date.now())
      expect(typeof formatted).toBe('string')
      expect(formatted.length).toBeGreaterThan(0)
    })
  })
})
