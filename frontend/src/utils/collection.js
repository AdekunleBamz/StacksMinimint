export const MAX_TOKEN_URI_LENGTH = 256
const ASCII_PATTERN = /^[\x20-\x7E]*$/

export function formatSTX(microstx) {
  if (microstx === null || microstx === undefined || Number.isNaN(Number(microstx))) {
    return '0'
  }

  return (Number(microstx) / 1e6).toFixed(3).replace(/\.?0+$/, '')
}

export function formatAddress(address, start = 5, end = 5) {
  if (!address) return ''
  if (address.length <= start + end + 3) return address
  return `${address.slice(0, start)}...${address.slice(-end)}`
}

export function formatLimit(value, fallback = 'Not set') {
  if (value === null || value === undefined) return fallback
  return `${value}`
}

export function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Just now'

  const now = Date.now()
  const diff = Math.max(now - timestamp, 0)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export function formatExactTime(timestamp) {
  if (!timestamp) return 'Unknown time'

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(timestamp))
}

export function getMetadataKind(uri) {
  if (!uri) return 'empty'

  if (uri.startsWith('ipfs://')) return 'ipfs'
  if (uri.startsWith('https://')) return 'https'
  if (uri.startsWith('http://')) return 'http'
  return 'unknown'
}

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
