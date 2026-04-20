/**
 * String utility functions for formatting and validation.
 * 
 * Provides helpers for address truncation, string capitalization,
 * and Stacks address validation.
 * 
 * @module strings
 */
/**
 * Truncates a Stacks wallet address to a shorter format (e.g., SP12...3456).
 * @param {string} address - The full wallet address.
 * @param {number} startChars - Number of characters to keep at the start.
 * @param {number} endChars - Number of characters to keep at the end.
 * @returns {string} The truncated address or an empty string if address is invalid.
 */
export function truncateAddress(address, startChars = 4, endChars = 4) {
  if (!address || typeof address !== 'string') return '';
  const normalizedAddress = address.trim();
  const safeStart = Number.isInteger(startChars) && startChars >= 0 ? startChars : 4;
  const safeEnd = Number.isInteger(endChars) && endChars >= 0 ? endChars : 4;
  if (normalizedAddress.length <= safeStart + safeEnd) return normalizedAddress;
  if (safeEnd === 0) return `${normalizedAddress.slice(0, safeStart)}...`;
  return `${normalizedAddress.slice(0, safeStart)}...${normalizedAddress.slice(-safeEnd)}`;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str 
 * @returns {string}
 */
export function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  const normalized = str.trimStart();
  if (!normalized) return '';
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}
/**
 * Validates if a string is a properly formatted Stacks address.
 * Matches both Mainnet (SP...) and Testnet (ST...) addresses.
 * @param {string} address 
 * @returns {boolean}
 */
export function isValidStacksAddress(address) {
  if (!address || typeof address !== 'string') return false;
  const normalizedAddress = address.trim();
  // Stacks addresses start with SP or ST and are 39-41 characters long
  const STACKS_ADDRESS_PATTERN = /^(S[PT])[0-9A-Z]{37,39}$/;
  return STACKS_ADDRESS_PATTERN.test(normalizedAddress);
}

/**
 * Truncates a long string (e.g. transaction ID) keeping start and end visible.
 * @param {string} str - The string to truncate.
 * @param {number} [startChars=6] - Characters to keep at start.
 * @param {number} [endChars=4] - Characters to keep at end.
 * @returns {string} Truncated string or original if short enough.
 */
export function truncateMiddle(str, startChars = 6, endChars = 4) {
  if (!str || typeof str !== 'string') return '';
  const s = str.trim();
  const safeStart = Number.isInteger(startChars) && startChars >= 0 ? startChars : 6;
  const safeEnd = Number.isInteger(endChars) && endChars >= 0 ? endChars : 4;
  if (s.length <= safeStart + safeEnd) return s;
  return `${s.slice(0, safeStart)}…${s.slice(-safeEnd)}`;
}

/**
 * Default export for strings utilities.
 */
export default { truncateAddress, capitalize, isValidStacksAddress, truncateMiddle }
