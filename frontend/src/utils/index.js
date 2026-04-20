/**
 * Utils barrel export file.
 * 
 * Centralizes all utility function exports for clean imports
 * throughout the application.
 */

// String utilities
export {
  truncateAddress,
  capitalize,
  isValidStacksAddress,
  truncateMiddle,
  isBlank,
  slugify,
  pluralize,
  zeroPad,
  isNumericString,
  isAlphanumeric,
  clampString
} from './strings';

// Collection utilities
export {
  MAX_TOKEN_URI_LENGTH,
  formatSTX,
  formatSTXCompact,
  formatAddress,
  formatLimit,
  formatRelativeTime,
  formatExactTime,
  getMetadataKind,
  getMetadataLabel,
  getMetadataGatewayUrl,
  validateTokenURI,
  createSubmissionRecord,
  getCardAccent
} from './collection';

// Focus trap utilities
export {
  createFocusTrap,
  trapFocusOnce,
  getFocusableElements
} from './focusTrap';

/**
 * Default exports for individual utility modules.
 */
export { default as stringsDefault } from './strings';
export { default as collectionDefault } from './collection';
export { default as focusTrapDefault } from './focusTrap';