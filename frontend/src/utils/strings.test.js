import { describe, it, expect } from 'vitest';
import { truncateAddress, capitalize } from './strings';

describe('strings utility', () => {
  describe('truncateAddress', () => {
    it('should truncate a long address correctly', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address)).toBe('SP5K...TJT');
    });

    it('should handle custom character counts', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address, 6, 2)).toBe('SP5K2R...JT');
    });

    it('should return the original address if it is short enough', () => {
      const address = 'SP5K';
      expect(truncateAddress(address)).toBe('SP5K');
    });

    it('should return an empty string for invalid inputs', () => {
      expect(truncateAddress(null)).toBe('');
      expect(truncateAddress(undefined)).toBe('');
      expect(truncateAddress(123)).toBe('');
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('stacks')).toBe('Stacks');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Stacks')).toBe('Stacks');
    });

    it('should handle empty strings or non-string inputs', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
    });
  });
});
