/**
 * useStacksWallet hook for managing wallet connection state.
 * 
 * Handles wallet connection/disconnection using @stacks/connect,
 * retrieves user address, and provides network configuration.
 * Supports both mainnet and testnet environments.
 * 
 * @module useStacksWallet
 */
import { useState, useEffect, useCallback } from 'react';
import {
  disconnect as disconnectStacksWallet,
  getLocalStorage as getStacksConnectStorage,
  request as requestStacksWallet,
} from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import { NETWORK } from '../contract';
import { formatAddress } from '../utils/collection';

/** Permissions granted to this app when the user connects their Stacks wallet. */
const WALLET_ADDRESS_STORAGE_KEY = 'stacksminimint:wallet-address';
const WALLET_CONNECT_NETWORK = NETWORK === 'testnet' ? 'testnet' : 'mainnet';
const WALLET_SELECT_TIMEOUT_MS = 45_000;
const WALLET_FALLBACK_TIMEOUT_MS = 8_000;

const MAINNET_ADDRESS_PREFIXES = ['SP', 'SM'];
const TESTNET_ADDRESS_PREFIXES = ['ST', 'SN'];

/**
 * normalizeStacksAddress - Trim a Stacks address string and return null for blank values.
 * @param {*} address - Raw address value
 * @returns {string|null} Trimmed address or null
 */
function normalizeStacksAddress(address) {
  if (typeof address !== 'string') return null;
  const normalizedAddress = address.trim();
  return normalizedAddress || null;
}

/**
 * isStacksAddress - Return true if the value is a valid Stacks address.
 * @param {string} address - Address string to check
 * @returns {boolean}
 */
function isStacksAddress(address) {
  return Boolean(getAddressNetwork(address));
}

/**
 * getAddressNetwork - Detect whether a Stacks address belongs to mainnet or testnet.
 * @param {string} address - Stacks address
 * @returns {'mainnet'|'testnet'|null} Network name or null if unrecognised
 */
function getAddressNetwork(address) {
  const normalizedAddress = normalizeStacksAddress(address);
  if (!normalizedAddress) return null;
  const prefix = normalizedAddress.slice(0, 2).toUpperCase();
  if (MAINNET_ADDRESS_PREFIXES.includes(prefix)) return 'mainnet';
  if (TESTNET_ADDRESS_PREFIXES.includes(prefix)) return 'testnet';
  return null;
}

/**
 * pickStacksAddress - Select the most appropriate Stacks address for the active network.
 *
 * Filters and normalises a list of address entries, then returns the first
 * address that matches the configured network, falling back to any valid address.
 *
 * @param {Array<string|{address:string}>|Object|null} addresses - Address candidates
 * @returns {string|null} Best-match address or null
 */
function pickStacksAddress(addresses) {
  if (addresses && !Array.isArray(addresses) && typeof addresses === 'object') {
    return pickStacksAddress([
      addresses.address,
      addresses.stxAddress,
      addresses.mainnet,
      addresses.testnet,
      addresses.stx,
      addresses.STX,
      addresses.stacks,
      addresses.Stacks,
      addresses.accounts,
      addresses.addresses,
      addresses.result
    ].flat().filter(Boolean));
  }

  if (!Array.isArray(addresses)) return null;

  const normalizedAddresses = addresses
    .map((entry) => normalizeStacksAddress(
      typeof entry === 'string'
        ? entry
        : entry?.address || entry?.stxAddress
    ))
    .filter(Boolean)
    .filter(isStacksAddress);

  return normalizedAddresses.find((address) => getAddressNetwork(address) === NETWORK) || normalizedAddresses[0] || null;
}

/**
 * getStacksAddress - Extract the best Stacks address from wallet connection response data.
 *
 * Tries multiple response shapes (addresses array, stx sub-field, profile object) in
 * priority order, returning the network-matched address or null.
 *
 * @param {Object|null} data - Wallet connection response
 * @returns {string|null} Stacks address or null
 */
export function getStacksAddress(data) {
  if (!data) return null;

  const directAddress = pickStacksAddress(data);
  if (directAddress) return directAddress;

  const responseAddress = pickStacksAddress(data?.addresses);
  if (responseAddress) return responseAddress;

  const storedAddress = pickStacksAddress(data?.addresses?.stx);
  if (storedAddress) return storedAddress;

  const accountAddress = pickStacksAddress(data?.accounts);
  if (accountAddress) return accountAddress;

  const resultAddress = getStacksAddress(data?.result);
  if (resultAddress) return resultAddress;

  const payloadAddress = getStacksAddress(data?.authResponsePayload);
  if (payloadAddress) return payloadAddress;

  if (!data?.profile?.stxAddress) return null

  const preferredAddress = NETWORK === 'mainnet'
    ? data.profile.stxAddress.mainnet
    : data.profile.stxAddress.testnet

  const fallbackAddress = NETWORK === 'mainnet'
    ? data.profile.stxAddress.testnet
    : data.profile.stxAddress.mainnet

  const candidateAddress =
    typeof preferredAddress === 'string' && preferredAddress.trim()
      ? preferredAddress
      : fallbackAddress

  return normalizeStacksAddress(candidateAddress)
}

function getCachedWalletAddress() {
  try {
    return normalizeStacksAddress(window.localStorage.getItem(WALLET_ADDRESS_STORAGE_KEY));
  } catch {
    return null;
  }
}

function setCachedWalletAddress(nextAddress) {
  try {
    if (nextAddress) {
      window.localStorage.setItem(WALLET_ADDRESS_STORAGE_KEY, nextAddress);
    } else {
      window.localStorage.removeItem(WALLET_ADDRESS_STORAGE_KEY);
    }
  } catch {
    // Local storage can be unavailable in privacy-restricted browser contexts.
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function withTimeout(promise, ms, message) {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => {
      reject(new Error(message));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    window.clearTimeout(timeoutId);
  });
}

async function getStacksConnectStorageAddress({ attempts = 6, delayMs = 100 } = {}) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const address = getStacksAddress(getStacksConnectStorage());
    if (address) return address;
    if (attempt < attempts - 1) {
      await wait(delayMs);
    }
  }
  return null;
}

async function requestWalletAddress(method) {
  try {
    return getStacksAddress(await withTimeout(
      requestStacksWallet(method, { network: WALLET_CONNECT_NETWORK }),
      WALLET_FALLBACK_TIMEOUT_MS,
      `${method} wallet request timed out`
    ));
  } catch (error) {
    if (error?.code !== -31001) {
      console.warn(`Failed to request ${method} from Stacks wallet:`, error);
    }
    return null;
  }
}

async function selectWalletAddress() {
  const response = await withTimeout(
    requestStacksWallet(
      { forceWalletSelect: true, persistWalletSelect: true },
      'getAddresses'
    ),
    WALLET_SELECT_TIMEOUT_MS,
    'Wallet connection timed out. Reopen your wallet extension, approve the request, then try again.'
  );
  return {
    address: getStacksAddress(response),
    response
  };
}

async function resolveConnectedAddress(connectResponse) {
  return (
    getStacksAddress(connectResponse) ||
    await requestWalletAddress('getAddresses') ||
    await requestWalletAddress('stx_getAddresses') ||
    await requestWalletAddress('stx_getAccounts') ||
    await getStacksConnectStorageAddress()
  );
}

/**
 * useStacksWallet - React hook for Stacks wallet connection and session state.
 *
 * Manages connect/disconnect lifecycle and restores an existing session on mount.
 *
 * @returns {{ address: string|null, isConnected: boolean, isSignedIn: boolean, displayAddress: string|null, isConnecting: boolean, isDisconnected: boolean, connect: Function, disconnect: Function, network: Object }}
 */
export function useStacksWallet() {
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  /** connect - Open the wallet prompt and persist the returned address. */
  const connect = useCallback(async () => {
    if (isConnecting || address) return;
    setIsConnecting(true);
    setError(null);

    try {
      const { address: selectedAddress, response } = await selectWalletAddress();
      const nextAddress = selectedAddress || await resolveConnectedAddress(response);

      setAddress(nextAddress);
      setCachedWalletAddress(nextAddress);

      if (!nextAddress) {
        const message = 'Wallet connected but did not return a Stacks address. Confirm the wallet is unlocked on Stacks mainnet and try again.';
        setError(message);
        console.error(message, response);
      }
    } catch (error) {
      if (error?.code !== -31001) {
        setError(error?.message || 'Failed to connect Stacks wallet.');
        console.error('Failed to connect Stacks wallet:', error);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [isConnecting, address]);

  /** disconnect - Clear wallet session data and reset all connection state. */
  const disconnect = useCallback(() => {
    disconnectStacksWallet();
    setAddress(null);
    setCachedWalletAddress(null);
    setError(null);
    setIsConnecting(false);
  }, []);

  // Restore wallet session from storage on initial mount (no re-run needed)
  useEffect(() => {
    setAddress(getStacksAddress(getStacksConnectStorage()) || getCachedWalletAddress());
  }, []);

  return {
    address,
    isConnected: Boolean(address),
    isSignedIn: Boolean(address),
    displayAddress: address ? formatAddress(address) : null,
    isConnecting,
    error,
    isDisconnected: !Boolean(address) && !isConnecting,
    connect,
    disconnect,
    network: NETWORK === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET
  };
}

/**
 * Default export for useStacksWallet hook.
 * @type {() => UseStacksWalletReturn}
 */
export default useStacksWallet
