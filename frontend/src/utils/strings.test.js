import { describe, it, expect } from 'vitest';
import { truncateAddress, capitalize, isValidStacksAddress } from './strings';

// Regression note: preserve strings behavior coverage.
describe('strings utility', () => {
  describe('truncateAddress', () => {
    it('should truncate a long address correctly', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address)).toBe('SP5K...9TJT');
    });

    it('should handle custom character counts', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address, 6, 2)).toBe('SP5K2R...JT');
    });

    it('should return the original address if it is short enough', () => {
      const address = 'SP5K';
      expect(truncateAddress(address)).toBe('SP5K');
    });

    it('should trim surrounding whitespace before truncation', () => {
      expect(truncateAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ')).toBe('SP5K...9TJT');
    });

    it('should support truncation with no suffix characters', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address, 4, 0)).toBe('SP5K...');
    });

    it('should fallback to default start count when start is invalid', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address, -1, 4)).toBe('SP5K...9TJT');
    });

    it('should fallback to default end count when end is invalid', () => {
      const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
      expect(truncateAddress(address, 4, -1)).toBe('SP5K...9TJT');
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

    it('should ignore leading whitespace before capitalization', () => {
      expect(capitalize('  stacks')).toBe('Stacks');
    });

    it('should preserve internal spacing after capitalization', () => {
      expect(capitalize('stacks chain')).toBe('Stacks chain');
    });

    it('should trim tab prefixes before capitalization', () => {
      expect(capitalize('\tstacks')).toBe('Stacks');
    });

    it('should return an empty string for whitespace-only values', () => {
      expect(capitalize('   ')).toBe('');
    });

    it('should handle empty strings or non-string inputs', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
    });
  });

  describe('isValidStacksAddress', () => {
    it('should validate mainnet and testnet addresses', () => {
      expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(true);
      expect(isValidStacksAddress('ST2J8EVYHP7SWB8B3J7G7H1ZP9YVZEV1XJ0D5X0W4')).toBe(true);
    });

    it('should accept lowercase addresses from user input', () => {
      expect(isValidStacksAddress('sp5k2rhmsbh4pap4pgx77mcvnk1zeed07cwx9tjt')).toBe(true);
    });

    it('should accept addresses with leading or trailing spaces', () => {
      expect(isValidStacksAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ')).toBe(true);
    });

    it('should reject invalid addresses', () => {
      expect(isValidStacksAddress('')).toBe(false);
      expect(isValidStacksAddress('SP123')).toBe(false);
      expect(isValidStacksAddress('bad-address')).toBe(false);
    });

    it('should reject non-string address inputs', () => {
      expect(isValidStacksAddress(null)).toBe(false);
      expect(isValidStacksAddress(100)).toBe(false);
    });

    it('should reject addresses with invalid prefix letters', () => {
      expect(isValidStacksAddress('SX5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(false);
    });

    it('should reject addresses that are too short', () => {
      expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJ')).toBe(false);
    });
  });
});
