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
  return str.charAt(0).toUpperCase() + str.slice(1);
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
  // Stacks addresses start with SP or ST and are 39-41 characters long
  const stacksAddressRegex = /^(S[PT])[0-9A-Z]{37,39}$/;
  return stacksAddressRegex.test(normalizedAddress);
}
