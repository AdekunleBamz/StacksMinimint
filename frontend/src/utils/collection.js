/**
 * Collection utility functions for formatting and validation.
 * 
 * Provides helpers for STX formatting, address truncation, time formatting,
 * metadata URI validation, and card accent color generation.
 * 
 * @module collection
 */
/**
 * Maximum character length for a token URI accepted by the contract.
 */
export const MAX_TOKEN_URI_LENGTH = 256
/**
 * Maximum number of recent mint activity entries to retain in memory per session.
 */
export const MAX_ACTIVITY_ENTRIES = 50
const ASCII_PATTERN = /^[\x20-\x7E]*$/
/** Divisor to convert micro-STX to STX (1 STX = 1,000,000 micro-STX). */
const STX_MICRO_DIVISOR = 1_000_000;
/** Threshold (ms) used to detect whether a timestamp is already in milliseconds. */
const UNIX_MS_THRESHOLD = 1_000_000_000_000;
/** Duration of one minute in milliseconds. */
const TIME_MINUTE_MS = 60_000;
/** Duration of one hour in milliseconds. */
const TIME_HOUR_MS = 3_600_000;
/** Duration of one day in milliseconds. */
const TIME_DAY_MS = 86_400_000;
/** Minutes per hour, used as a threshold in relative time formatting. */
const TIME_MINUTES_PER_HOUR = 60;
/** Hours per day, used as a threshold in relative time formatting. */
const TIME_HOURS_PER_DAY = 24;

/**
 * normalizeMicrostxInput - Parse and normalise a micro-STX input value.
 *
 * Accepts strings and numbers and returns the numeric value, or null for
 * invalid/non-finite inputs. Used as the pre-processing step before display formatting.
 *
 * @param {string|number|null|undefined} microstx - Raw micro-STX input
 * @returns {number|null} Numeric micro-STX value or null if invalid
 */
export function normalizeMicrostxInput(microstx) {
  const input = typeof microstx === 'string' ? microstx.trim() : microstx
  const amount = Number(input)
  if (microstx === null || microstx === undefined || Number.isNaN(amount) || !Number.isFinite(amount)) {
    return null
  }

  return amount
}

/**
 * getSTXFormatDescriptor - Build a full format descriptor for a micro-STX amount.
 *
 * Returns an object with the formatted STX string, validity flag, and raw values.
 * Used internally by formatSTX and for cases that need the full descriptor.
 *
 * @param {string|number|null|undefined} microstx - Amount in micro-STX
 * @returns {{ formatted: string, isValid: boolean, microstx: number, stxValue: number }}
 */
export function getSTXFormatDescriptor(microstx) {
  const normalizedAmount = normalizeMicrostxInput(microstx)
  if (normalizedAmount === null) {
    return {
      formatted: '0',
      isValid: false,
      microstx: 0,
      stxValue: 0
    }
  }

  const stxValue = normalizedAmount / STX_MICRO_DIVISOR
  return {
    formatted: new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    }).format(stxValue),
    isValid: true,
    microstx: normalizedAmount,
    stxValue
  }
}

/**
 * Formats micro-STX as the plain STX display value.
 * @param {string|number|null|undefined} microstx - Amount in micro-STX
 * @returns {string} Formatted STX amount without the "STX" suffix
 */
export function formatSTX(microstx) {
  return getSTXFormatDescriptor(microstx).formatted
}

/**
 * Formats a micro-STX amount as a compact human-readable string (e.g., "1.5K STX").
 * Useful for space-constrained UI elements such as cards and badges.
 * @param {string|number} microstx - The amount in micro-STX.
 * @returns {string} The compact STX string.
 */
export function formatSTXCompact(microstx) {
  const input = typeof microstx === 'string' ? microstx.trim() : microstx
  const amount = Number(input)
  if (microstx === null || microstx === undefined || Number.isNaN(amount) || !Number.isFinite(amount)) {
    return '0 STX'
  }
  const stx = amount / STX_MICRO_DIVISOR
  if (stx >= 1_000_000) return `${(stx / 1_000_000).toFixed(1)}M STX`
  if (stx >= 1_000) return `${(stx / 1_000).toFixed(1)}K STX`
  return `${stx.toFixed(2)} STX`
}

/**
 * Formats a Stacks address for display by truncating the middle.
 * @param {string} address - The full Stacks address.
 * @param {number} [start=5] - Number of characters to show at the start.
 * @param {number} [end=5] - Number of characters to show at the end.
 * @returns {string} The truncated address.
 */
export function formatAddress(address, start = 5, end = 5) {
  if (!address || typeof address !== 'string') return ''
  const normalizedAddress = address.trim()
  if (!normalizedAddress) return ''
  const safeStart = Number.isInteger(start) && start >= 0 ? start : 5
  const safeEnd = Number.isInteger(end) && end >= 0 ? end : 5
  if (normalizedAddress.length <= safeStart + safeEnd + 3) return normalizedAddress
  if (safeEnd === 0) return `${normalizedAddress.slice(0, safeStart)}...`
  return `${normalizedAddress.slice(0, safeStart)}...${normalizedAddress.slice(-safeEnd)}`
}

/**
 * Formats a limit value with a fallback label.
 * @param {any} value - The limit value.
 * @param {string} [fallback='Not set'] - The fallback string.
 * @returns {string} The formatted limit.
 */
export function getLimitText(value, fallback = 'Not set') {
  if (isLimitFallback(value)) return fallback
  return `${value}`
}

/**
 * isLimitFallback - Return true if the value should show the fallback label.
 * @param {*} value - Value to check
 * @returns {boolean} True if null, undefined, or blank string
 */
export function isLimitFallback(value) {
  return value === null || value === undefined || (typeof value === 'string' && value.trim().length === 0)
}

/**
 * getLimitValueType - Classify the type of a limit value for internal use.
 * @param {*} value - Value to classify
 * @returns {'array'|'empty'|string} Type label
 */
function getLimitValueType(value) {
  if (Array.isArray(value)) return 'array'
  if (value === null || value === undefined) return 'empty'
  return typeof value
}

/**
 * describeLimit - Return a full descriptor object for a limit value.
 * @param {*} value - Limit value
 * @param {string} [fallback='Not set'] - Label to show when value is empty
 * @returns {{ text: string, isFallback: boolean, valueType: string }}
 */
export function describeLimit(value, fallback = 'Not set') {
  return {
    text: getLimitText(value, fallback),
    isFallback: isLimitFallback(value),
    valueType: getLimitValueType(value)
  }
}

/**
 * formatLimit - Format a limit value as a plain display string.
 * @param {*} value - Limit value
 * @param {string} [fallback='Not set'] - Fallback label for empty values
 * @returns {string} Formatted limit string
 */
export function formatLimit(value, fallback = 'Not set') {
  return getLimitText(value, fallback)
}

/**
 * normalizeRelativeTimestamp - Convert a Unix timestamp to milliseconds.
 * Returns null for missing or non-finite values.
 * @param {number|null|undefined} timestamp - Unix timestamp in s or ms
 * @returns {number|null} Timestamp in ms or null
 */
export function normalizeRelativeTimestamp(timestamp) {
  if (timestamp === null || timestamp === undefined) return null
  const time = Number(timestamp)
  if (Number.isNaN(time) || !Number.isFinite(time)) return null
  return time < UNIX_MS_THRESHOLD ? time * 1000 : time
}

/**
 * getRelativeTimeDescriptor - Compute a relative time label and metadata object.
 * @param {number|null|undefined} timestamp - Unix timestamp in s or ms
 * @param {number} [now=Date.now()] - Reference time in ms
 * @returns {{ label: string, unit: string, value: number, isFuture: boolean }}
 */
export function getRelativeTimeDescriptor(timestamp, now = Date.now()) {
  const normalizedTime = normalizeRelativeTimestamp(timestamp)
  if (normalizedTime === null) {
    return { label: 'Just now', unit: 'now', value: 0, isFuture: false }
  }

  if (normalizedTime > now) {
    return { label: 'Just now', unit: 'now', value: 0, isFuture: true }
  }

  const diff = Math.max(now - normalizedTime, 0)
  const minutes = Math.floor(diff / TIME_MINUTE_MS)
  const hours = Math.floor(diff / TIME_HOUR_MS)
  const days = Math.floor(diff / TIME_DAY_MS)

  if (minutes < 1) return { label: 'Just now', unit: 'now', value: 0, isFuture: false }
  if (minutes < TIME_MINUTES_PER_HOUR) return { label: `${minutes}m ago`, unit: 'minute', value: minutes, isFuture: false }
  if (hours < TIME_HOURS_PER_DAY) return { label: `${hours}h ago`, unit: 'hour', value: hours, isFuture: false }
  if (days < 30) return { label: `${days}d ago`, unit: 'day', value: days, isFuture: false }

  const months = Math.floor(days / 30)
  return { label: `${months}mo ago`, unit: 'month', value: months, isFuture: false }
}

/**
 * Formats a timestamp into a relative time string (e.g., "5m ago").
 * @param {number} timestamp - The Unix timestamp in milliseconds.
 * @returns {string} The relative time string.
 */
export function formatRelativeTime(timestamp) {
  const descriptor = getRelativeTimeDescriptor(timestamp)
  return descriptor.label
}

/**
 * normalizeExactTimestamp - Convert a Unix timestamp to milliseconds for exact display.
 * Returns null for missing or non-finite values.
 * @param {number|null|undefined} timestamp - Unix timestamp in s or ms
 * @returns {number|null} Timestamp in ms or null
 */
export function normalizeExactTimestamp(timestamp) {
  if (timestamp === null || timestamp === undefined) return null
  const time = Number(timestamp)
  if (Number.isNaN(time) || !Number.isFinite(time)) return null
  return time < UNIX_MS_THRESHOLD ? time * 1000 : time
}

/**
 * getExactTimeDescriptor - Compute an exact date/time label and ISO string.
 * @param {number|null|undefined} timestamp - Unix timestamp in s or ms
 * @param {string|undefined} [locale] - BCP 47 locale for formatting
 * @returns {{ label: string, iso: string|null, isValid: boolean }}
 */
export function getExactTimeDescriptor(timestamp, locale) {
  const normalizedTime = normalizeExactTimestamp(timestamp)
  if (normalizedTime === null) {
    return { label: 'Unknown time', iso: null, isValid: false }
  }

  const date = new Date(normalizedTime)
  return {
    label: new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date),
    iso: date.toISOString(),
    isValid: true
  }
}

/**
 * Formats a timestamp into a human-readable date and time string.
 * @param {number} timestamp - The Unix timestamp in milliseconds.
 * @returns {string} The exact time string.
 */
export function formatExactTime(timestamp) {
  const descriptor = getExactTimeDescriptor(timestamp)
  return descriptor.label
}

/**
 * Determines the kind of metadata from a URI scheme.
 * @param {string} uri - The metadata URI.
 * @returns {'ipfs'|'https'|'http'|'empty'|'unknown'} The metadata kind.
 */
export function getMetadataKind(uri) {
  if (!uri) return 'empty'
  const normalized = String(uri).trim().toLowerCase()
  if (!normalized) return 'empty'

  if (normalized.startsWith('ipfs://')) return 'ipfs'
  if (normalized.startsWith('https://')) return 'https'
  if (normalized.startsWith('http://')) return 'http'
  if (normalized.startsWith('ar://')) return 'arweave'
  return 'unknown'
}

/**
 * Generates a human-friendly label for a metadata URI.
 * @param {string} uri - The metadata URI.
 * @returns {string} The metadata label.
 */
export function getMetadataLabel(uri) {
  const normalized = String(uri ?? '').trim()
  const kind = getMetadataKind(normalized)

  if (kind === 'ipfs') {
    return 'IPFS metadata'
  }

  if (kind === 'arweave') {
    return 'Arweave metadata'
  }

  if (kind === 'https' || kind === 'http') {
    try {
      const hostname = new URL(normalized).hostname.replace(/^www\./, '')
      return hostname || 'Web metadata'
    } catch {
      return 'Web metadata'
    }
  }

  return 'Metadata URI'
}

/**
 * Converts a URI to a gateway-accessible URL if applicable.
 * @param {string} uri - The original metadata URI.
 * @returns {string|null} The accessible URL or null.
 */
export function getMetadataGatewayUrl(uri) {
  if (!uri) return null
  const normalized = String(uri).trim()
  const lowered = normalized.toLowerCase()

  if (lowered.startsWith('ipfs://')) {
    const path = normalized
      .slice('ipfs://'.length)
      .replace(/^ipfs\//i, '')
      .trim()
    if (!path || /\s/.test(path)) {
      return null
    }
    return `${IPFS_GATEWAY_BASE_URL}${path}`
  }

  if (lowered.startsWith('https://') || lowered.startsWith('http://')) {
    return normalized
  }

  return null
}

/**
 * extractGatewayHost - Extract the hostname from a gateway URL.
 * @param {string} url - Full URL string
 * @returns {string|null} Hostname or null if URL is invalid
 */
export function extractGatewayHost(url) {
  try {
    return new URL(url).hostname
  } catch {
    return null
  }
}

/**
 * getMetadataAccessDescriptor - Derive a full access descriptor for a token metadata URI.
 *
 * Combines kind, label, gateway URL, and accessibility flags into a single object.
 *
 * @param {string|null|undefined} uri - Token metadata URI
 * @returns {{ kind: string, label: string, gatewayUrl: string|null, gatewayHost: string|null, isAccessible: boolean, requiresGateway: boolean }}
 */
export function getMetadataAccessDescriptor(uri) {
  const kind = getMetadataKind(uri)
  const label = getMetadataLabel(uri)
  const gatewayUrl = getMetadataGatewayUrl(uri)
  const gatewayHost = gatewayUrl ? extractGatewayHost(gatewayUrl) : null
  const requiresGateway = kind === 'ipfs'

  return {
    kind,
    label,
    gatewayUrl,
    gatewayHost,
    isAccessible: Boolean(gatewayUrl),
    requiresGateway
  }
}

/**
 * Validates a token URI against contract and UI constraints.
 * @param {string} value - The URI to validate.
 * @returns {Object} The validation result object.
 */
export function validateTokenURI(value) {
  const normalized = String(value ?? '').trim()
  const kind = getMetadataKind(normalized)
  const characterCount = normalized.length
  const remainingCharacters = MAX_TOKEN_URI_LENGTH - characterCount
  const isNearLimit = characterCount >= MAX_TOKEN_URI_LENGTH * 0.9
  const isAsciiOnly = ASCII_PATTERN.test(normalized)
  const isSecureScheme = kind === 'ipfs' || kind === 'https' || kind === 'arweave'
  const isValid = Boolean(normalized) && isSecureScheme && isAsciiOnly && characterCount <= MAX_TOKEN_URI_LENGTH

  if (!normalized) {
    return {
      kind,
      isValid: false,
      tone: 'neutral',
      label: 'Metadata required',
      helper: 'Use an ipfs:// or https:// metadata URL. The contract accepts ASCII only, up to 256 characters.',
      characterCount,
      remainingCharacters,
      isNearLimit,
      normalizedValue: normalized,
      secureScheme: isSecureScheme
    }
  }

  if (!isAsciiOnly) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Unsupported characters',
      helper: 'Remove emoji or other non-ASCII characters before opening the wallet prompt.',
      characterCount,
      remainingCharacters,
      isNearLimit,
      normalizedValue: normalized,
      secureScheme: isSecureScheme
    }
  }

  if (characterCount > MAX_TOKEN_URI_LENGTH) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'URI too long',
      helper: `Keep the metadata URI within ${MAX_TOKEN_URI_LENGTH} characters to match the contract limit.`,
      characterCount,
      remainingCharacters,
      isNearLimit,
      normalizedValue: normalized,
      secureScheme: isSecureScheme
    }
  }

  if (kind === 'http') {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Upgrade to HTTPS',
      helper: 'Use a secure https:// link or an ipfs:// CID before submitting.',
      characterCount,
      remainingCharacters,
      isNearLimit,
      normalizedValue: normalized,
      secureScheme: isSecureScheme
    }
  }

  if (!isSecureScheme) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Unsupported scheme',
      helper: 'Only ipfs://, ar://, and https:// metadata URLs are accepted in this UI.',
      characterCount,
      remainingCharacters,
      isNearLimit,
      normalizedValue: normalized,
      secureScheme: isSecureScheme
    }
  }

  if (kind === 'ipfs') {
    const ipfsPath = normalized
      .slice('ipfs://'.length)
      .trim()
      .replace(/^ipfs\//i, '')
    if (!ipfsPath || /\s/.test(ipfsPath)) {
      return {
        kind,
        isValid: false,
        tone: 'warning',
        label: 'Invalid IPFS URI',
        helper: 'Provide an ipfs:// URI with a CID or CID path and no spaces.',
        characterCount,
        remainingCharacters,
        isNearLimit,
        normalizedValue: normalized,
        secureScheme: isSecureScheme
      }
    }
  }

  if (kind === 'https') {
    try {
      const parsed = new URL(normalized)
      if (parsed.username || parsed.password) {
        return {
          kind,
          isValid: false,
          tone: 'warning',
          label: 'Remove URL credentials',
          helper: 'Use a public metadata URL without embedded username or password fields.',
          characterCount,
          remainingCharacters,
          isNearLimit,
          normalizedValue: normalized,
          secureScheme: isSecureScheme
        }
      }
    } catch {
      return {
        kind,
        isValid: false,
        tone: 'warning',
        label: 'Invalid metadata URL',
        helper: 'Provide a fully valid https:// URL before submitting to the wallet.',
        characterCount,
        remainingCharacters,
        isNearLimit,
        normalizedValue: normalized,
        secureScheme: isSecureScheme
      }
    }
  }

  return {
    kind,
    isValid: true,
    tone: 'success',
    label: kind === 'ipfs' ? 'IPFS metadata ready' : kind === 'arweave' ? 'Arweave metadata ready' : 'HTTPS metadata ready',
    helper: 'This URI passes the local checks and is ready for wallet confirmation.',
    characterCount,
    remainingCharacters,
    isNearLimit,
    normalizedValue: normalized,
    secureScheme: isSecureScheme
  }
}

export function normalizeSubmissionAddress(address) {
  return typeof address === 'string' ? address.trim() : address
}

export function normalizeSubmissionTokenURI(tokenURI) {
  return typeof tokenURI === 'string' ? tokenURI.trim() : tokenURI
}

/**
 * Creates a record for a pending or complete submission.
 * @param {Object} params - The submission parameters.
 * @returns {Object} The submission record.
 */
export function createSubmissionRecord({ txId, tokenURI, address }) {
  const normalizedTxId = typeof txId === 'string' ? txId.trim() : txId
  const normalizedAddress = normalizeSubmissionAddress(address)
  const normalizedTokenURI = normalizeSubmissionTokenURI(tokenURI)
  const safeAddress = normalizedAddress || 'unknown'
  const fallbackId = `${SUBMISSION_ID_PREFIX}${Date.now()}-${safeAddress}`
  return {
    id: normalizedTxId || fallbackId,
    txId: normalizedTxId,
    tokenURI: normalizedTokenURI,
    address: normalizedAddress,
    metadataKind: getMetadataKind(normalizedTokenURI),
    metadataLabel: getMetadataLabel(normalizedTokenURI),
    createdAt: Date.now()
  }
}

export function createSubmissionSummary(record) {
  const safeRecord = record || {}
  const normalizedTxId = typeof safeRecord.txId === 'string' ? safeRecord.txId.trim() : safeRecord.txId
  return {
    id: safeRecord.id ?? null,
    txId: normalizedTxId ?? null,
    hasTxId: Boolean(normalizedTxId),
    metadataKind: getMetadataKind(safeRecord.tokenURI),
    metadataLabel: getMetadataLabel(safeRecord.tokenURI),
    isLocalOnly: !normalizedTxId
  }
}

/** Base URL of the public IPFS HTTP gateway for fetching IPFS content. */
const IPFS_GATEWAY_BASE_URL = 'https://ipfs.io/ipfs/';
/** Hue offset applied to the secondary accent color to differentiate it from primary. */
const CARD_ACCENT_SECONDARY_HUE_OFFSET = 42;
/** Fallback seed string used when no seed is provided to getCardAccent. */
const CARD_ACCENT_DEFAULT_SEED = 'minimint';
/** Prefix for locally generated submission IDs when no transaction ID is available. */
const SUBMISSION_ID_PREFIX = 'local-';
/** Saturation percentage for the primary card accent color. */
const CARD_ACCENT_PRIMARY_SATURATION = 72;
/** Lightness percentage for the primary card accent color. */
const CARD_ACCENT_PRIMARY_LIGHTNESS = 58;
/** Saturation percentage for the secondary card accent color. */
const CARD_ACCENT_SECONDARY_SATURATION = 78;
/** Lightness percentage for the secondary card accent color. */
const CARD_ACCENT_SECONDARY_LIGHTNESS = 64;
/** Alpha value for the glow effect applied to the primary card accent color. */
const CARD_ACCENT_GLOW_ALPHA = 0.25;
/** Number of degrees in a full hue circle, used to wrap computed hue values. */
const HUE_CIRCLE_DEGREES = 360;
/**
 * Generates deterministic card accent colors from a seed value.
 * @param {string} seed - The seed string for hashing.
 * @returns {{primary: string, secondary: string, glow: string, hue: number}} The accent color object.
 */
export function getCardAccent(seed) {
  const input = String(seed || CARD_ACCENT_DEFAULT_SEED)
  const secondaryHueOffset = CARD_ACCENT_SECONDARY_HUE_OFFSET
  let hash = 0

  for (let index = 0; index < input.length; index += 1) {
    hash = input.charCodeAt(index) + ((hash << 5) - hash)
  }

  const hue = Math.abs(hash) % HUE_CIRCLE_DEGREES
  const secondaryHue = (hue + secondaryHueOffset) % HUE_CIRCLE_DEGREES

  return {
    primary: `hsl(${hue} ${CARD_ACCENT_PRIMARY_SATURATION}% ${CARD_ACCENT_PRIMARY_LIGHTNESS}%)`,
    secondary: `hsl(${secondaryHue} ${CARD_ACCENT_SECONDARY_SATURATION}% ${CARD_ACCENT_SECONDARY_LIGHTNESS}%)`,
    glow: `hsla(${hue} ${CARD_ACCENT_PRIMARY_SATURATION}% ${CARD_ACCENT_PRIMARY_LIGHTNESS}% / ${CARD_ACCENT_GLOW_ALPHA})`,
    hue
  }
}

/**
 * Default export for collection utilities.
 */
export default {
  MAX_TOKEN_URI_LENGTH,
  MAX_ACTIVITY_ENTRIES,
  normalizeMicrostxInput,
  getSTXFormatDescriptor,
  formatSTX,
  formatAddress,
  getLimitText,
  isLimitFallback,
  describeLimit,
  formatLimit,
  normalizeRelativeTimestamp,
  getRelativeTimeDescriptor,
  formatRelativeTime,
  normalizeExactTimestamp,
  getExactTimeDescriptor,
  formatExactTime,
  getMetadataKind,
  getMetadataLabel,
  getMetadataGatewayUrl,
  extractGatewayHost,
  getMetadataAccessDescriptor,
  validateTokenURI,
  normalizeSubmissionAddress,
  normalizeSubmissionTokenURI,
  createSubmissionRecord,
  createSubmissionSummary,
  getCardAccent
}

/**
 * Returns true if the given token ID is within valid NFT range.
 * @param {any} id - The token ID to validate.
 * @param {number} [maxSupply=10000] - Maximum allowed supply.
 * @returns {boolean}
 */
export function isValidTokenId(id, maxSupply = 10000) {
  const numId = Number(id);
  return Number.isInteger(numId) && numId >= 1 && numId <= maxSupply;
}
