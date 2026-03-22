import { describe, it, expect } from 'vitest';
import { truncateAddress, capitalize, isValidStacksAddress } from './strings';

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

  describe('isValidStacksAddress', () => {
    it('should validate mainnet and testnet addresses', () => {
      expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(true);
      expect(isValidStacksAddress('ST2J8EVYHP7SWB8B3J7G7H1ZP9YVZEV1XJ0D5X0W4')).toBe(true);
    });

    it('should reject invalid addresses', () => {
      expect(isValidStacksAddress('')).toBe(false);
      expect(isValidStacksAddress('SP123')).toBe(false);
      expect(isValidStacksAddress('bad-address')).toBe(false);
    });
  });
});
