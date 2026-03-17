/**
 * Truncates a Stacks wallet address to a shorter format (e.g., SP12...3456).
 * @param {string} address - The full wallet address.
 * @param {number} startChars - Number of characters to keep at the start.
 * @param {number} endChars - Number of characters to keep at the end.
 * @returns {string} The truncated address or an empty string if address is invalid.
 */
export function truncateAddress(address, startChars = 4, endChars = 4) {
  if (!address || typeof address !== 'string') return '';
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
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
