/**
 * Maximum character length for a token URI accepted by the contract.
 */
export const MAX_TOKEN_URI_LENGTH = 256
const ASCII_PATTERN = /^[\x20-\x7E]*$/

/**
 * Formats a micro-STX amount into a human-readable STX string.
 * @param {string|number} microstx - The amount in micro-STX.
 * @returns {string} The formatted STX amount.
 */
export function formatSTX(microstx) {
  const amount = Number(microstx)
  if (microstx === null || microstx === undefined || Number.isNaN(amount) || !Number.isFinite(amount)) {
    return '0'
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  }).format(amount / 1e6)
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
  const safeStart = Number.isInteger(start) && start >= 0 ? start : 5
  const safeEnd = Number.isInteger(end) && end >= 0 ? end : 5
  if (address.length <= safeStart + safeEnd + 3) return address
  return `${address.slice(0, safeStart)}...${address.slice(-safeEnd)}`
}

/**
 * Formats a limit value with a fallback label.
 * @param {any} value - The limit value.
 * @param {string} [fallback='Not set'] - The fallback string.
 * @returns {string} The formatted limit.
 */
export function formatLimit(value, fallback = 'Not set') {
  if (value === null || value === undefined) return fallback
  if (typeof value === 'string' && value.trim().length === 0) return fallback
  return `${value}`
}

/**
 * Formats a timestamp into a relative time string (e.g., "5m ago").
 * @param {number} timestamp - The Unix timestamp in milliseconds.
 * @returns {string} The relative time string.
 */
export function formatRelativeTime(timestamp) {
  if (timestamp === null || timestamp === undefined) return 'Just now'
  const time = Number(timestamp)
  if (Number.isNaN(time) || !Number.isFinite(time)) return 'Just now'

  const now = Date.now()
  const diff = Math.max(now - time, 0)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

/**
 * Formats a timestamp into a human-readable date and time string.
 * @param {number} timestamp - The Unix timestamp in milliseconds.
 * @returns {string} The exact time string.
 */
export function formatExactTime(timestamp) {
  if (timestamp === null || timestamp === undefined) return 'Unknown time'
  const time = Number(timestamp)
  if (Number.isNaN(time) || !Number.isFinite(time)) return 'Unknown time'

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(time))
}

/**
 * Determines the kind of metadata from a URI scheme.
 * @param {string} uri - The metadata URI.
 * @returns {'ipfs'|'https'|'http'|'empty'|'unknown'} The metadata kind.
 */
export function getMetadataKind(uri) {
  if (!uri) return 'empty'
  const normalized = String(uri).trim().toLowerCase()

  if (normalized.startsWith('ipfs://')) return 'ipfs'
  if (normalized.startsWith('https://')) return 'https'
  if (normalized.startsWith('http://')) return 'http'
  return 'unknown'
}

/**
 * Generates a human-friendly label for a metadata URI.
 * @param {string} uri - The metadata URI.
 * @returns {string} The metadata label.
 */
export function getMetadataLabel(uri) {
  const kind = getMetadataKind(uri)

  if (kind === 'ipfs') {
    return 'IPFS metadata'
  }

  if (kind === 'https' || kind === 'http') {
    try {
      return new URL(uri).hostname.replace(/^www\./, '')
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

  if (uri.startsWith('ipfs://')) {
    return `https://ipfs.io/ipfs/${uri.slice('ipfs://'.length)}`
  }

  if (uri.startsWith('https://') || uri.startsWith('http://')) {
    return uri
  }

  return null
}

/**
 * Validates a token URI against contract and UI constraints.
 * @param {string} value - The URI to validate.
 * @returns {Object} The validation result object.
 */
export function validateTokenURI(value) {
  const normalized = value.trim()
  const kind = getMetadataKind(normalized)
  const characterCount = normalized.length
  const isAsciiOnly = ASCII_PATTERN.test(normalized)
  const isSecureScheme = kind === 'ipfs' || kind === 'https'
  const isValid = Boolean(normalized) && isSecureScheme && isAsciiOnly && characterCount <= MAX_TOKEN_URI_LENGTH

  if (!normalized) {
    return {
      kind,
      isValid: false,
      tone: 'neutral',
      label: 'Metadata required',
      helper: 'Use an ipfs:// or https:// metadata URL. The contract accepts ASCII only, up to 256 characters.',
      characterCount
    }
  }

  if (!isAsciiOnly) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Unsupported characters',
      helper: 'Remove emoji or other non-ASCII characters before opening the wallet prompt.',
      characterCount
    }
  }

  if (characterCount > MAX_TOKEN_URI_LENGTH) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'URI too long',
      helper: `Keep the metadata URI within ${MAX_TOKEN_URI_LENGTH} characters to match the contract limit.`,
      characterCount
    }
  }

  if (kind === 'http') {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Upgrade to HTTPS',
      helper: 'Use a secure https:// link or an ipfs:// CID before submitting.',
      characterCount
    }
  }

  if (!isSecureScheme) {
    return {
      kind,
      isValid: false,
      tone: 'warning',
      label: 'Unsupported scheme',
      helper: 'Only ipfs:// and https:// metadata URLs are accepted in this UI.',
      characterCount
    }
  }

  return {
    kind,
    isValid: true,
    tone: 'success',
    label: kind === 'ipfs' ? 'IPFS metadata ready' : 'HTTPS metadata ready',
    helper: 'This URI passes the local checks and is ready for wallet confirmation.',
    characterCount
  }
}

/**
 * Creates a record for a pending or complete submission.
 * @param {Object} params - The submission parameters.
 * @returns {Object} The submission record.
 */
export function createSubmissionRecord({ txId, tokenURI, address }) {
  return {
    id: txId,
    txId,
    tokenURI,
    address,
    metadataKind: getMetadataKind(tokenURI),
    metadataLabel: getMetadataLabel(tokenURI),
    createdAt: Date.now()
  }
}

/**
 * Generates a deterministic color palette based on a seed string.
 * @param {string} seed - The seed string for hashing.
 * @returns {Object} The accent color object.
 */
export function getCardAccent(seed) {
  const input = seed || 'minimint'
  let hash = 0

  for (let index = 0; index < input.length; index += 1) {
    hash = input.charCodeAt(index) + ((hash << 5) - hash)
  }

  const hue = Math.abs(hash) % 360
  const secondaryHue = (hue + 42) % 360

  return {
    primary: `hsl(${hue} 72% 58%)`,
    secondary: `hsl(${secondaryHue} 78% 64%)`,
    glow: `hsla(${hue} 72% 58% / 0.25)`
  }
}
