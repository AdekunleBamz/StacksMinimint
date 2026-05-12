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
  const normalizedAddress = address.trim().toUpperCase();
  // Stacks addresses start with SP or ST and are 40-41 characters long
  // Keep the pattern strict so pasted punctuation fails validation.
  const STACKS_ADDRESS_PATTERN = /^(S[PT])[0-9A-Z]{38,39}$/;
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
  if (safeEnd === 0) return `${s.slice(0, safeStart)}…`;
  return `${s.slice(0, safeStart)}…${s.slice(-safeEnd)}`;
}

/**
 * Returns true if the value is null, undefined, or a whitespace-only string.
 * @param {any} str - The value to check.
 * @returns {boolean}
 */
export function isBlank(str) {
  if (str === null || str === undefined) return true;
  return typeof str === 'string' && str.trim().length === 0;
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} str - The string to slugify.
 * @returns {string} The slugified string.
 */
export function slugify(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Returns the singular or plural form of a word based on count.
 * @param {number} count - The count to check.
 * @param {string} singular - The singular form.
 * @param {string} [plural] - The plural form (defaults to singular + 's').
 * @returns {string} The appropriate form.
 */
export function pluralize(count, singular, plural) {
  const safePlural = typeof plural === 'string' ? plural : `${singular}s`;
  return count === 1 ? singular : safePlural;
}

/**
 * Default export for strings utilities.
 */
export default { truncateAddress, capitalize, isValidStacksAddress, truncateMiddle, isBlank, slugify, pluralize }

/**
 * Pads a number with leading zeros to reach a minimum length.
 * Negative values and non-numeric inputs are coerced to non-negative integers.
 * @param {number|string} num - The number to pad (sign is stripped for negative values).
 * @param {number} [length=2] - Minimum desired string length.
 * @returns {string} Zero-padded number string.
 */
export function zeroPad(num, length = 2) {
  const s = String(Math.abs(Math.trunc(Number(num) || 0)));
  const safeLen = Number.isInteger(length) && length > 0 ? length : 2;
  return s.padStart(safeLen, '0');
}

/**
 * Returns true if the string is a valid numeric string (integer or decimal).
 * @param {any} value - The value to test.
 * @returns {boolean}
 */
export function isNumericString(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  return /^-?\d+(\.\d+)?$/.test(value.trim());
}

/**
 * Returns true if the string contains only alphanumeric characters.
 * @param {any} value - The value to test.
 * @returns {boolean}
 */
export function isAlphanumeric(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  return /^[a-z0-9]+$/i.test(value.trim());
}

/**
 * Clamps a string to a maximum length, appending an ellipsis if truncated.
 * @param {string} str - The string to clamp.
 * @param {number} [maxLength=100] - Maximum character count before truncation.
 * @returns {string}
 */
export function clampString(str, maxLength = 100) {
  if (!str || typeof str !== 'string') return '';
  const safeMax = Number.isInteger(maxLength) && maxLength > 0 ? maxLength : 100;
  if (str.length <= safeMax) return str;
  return `${str.slice(0, safeMax)}…`;
}
