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
  AppConfig,
  UserSession,
  connect as connectStacksWallet,
  disconnect as disconnectStacksWallet,
  getLocalStorage as getStacksConnectStorage,
  isConnected as isStacksConnectConnected,
} from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import { NETWORK } from '../contract';
import { formatAddress } from '../utils/collection';

/** Permissions granted to this app when the user connects their Stacks wallet. */
const WALLET_APP_PERMISSIONS = ['store_write', 'publish_data'];
const appConfig = new AppConfig(WALLET_APP_PERMISSIONS);
export const userSession = new UserSession({ appConfig });

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
      addresses.accounts,
      addresses.addresses
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

  const payloadAddress = getStacksAddress(data?.authResponsePayload);
  if (payloadAddress) return payloadAddress;

  let sessionUserData = null;
  try {
    sessionUserData = data?.userSession?.loadUserData?.();
  } catch (error) {
    sessionUserData = null;
  }

  const sessionAddress = getStacksAddress(sessionUserData);
  if (sessionAddress) return sessionAddress;

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

/**
 * getLegacyUserData - Load user data from the legacy @stacks/connect UserSession.
 * Returns null if the user is not signed in or if session data cannot be read.
 * @returns {Object|null} Legacy user data or null
 */
function getLegacyUserData() {
  try {
    return userSession.isUserSignedIn() ? userSession.loadUserData() : null;
  } catch (error) {
    console.warn('Failed to read legacy Stacks session data:', error);
    return null;
  }
}

/**
 * useStacksWallet - React hook for Stacks wallet connection and session state.
 *
 * Manages connect/disconnect lifecycle and restores an existing session on mount.
 *
 * @returns {{ address: string|null, userData: Object|null, isConnected: boolean, isSignedIn: boolean, displayAddress: string|null, isConnecting: boolean, isDisconnected: boolean, connect: Function, disconnect: Function, network: Object }}
 */
export function useStacksWallet() {
  const [userData, setUserData] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  /** connect - Open the wallet prompt and persist the returned address. */
  const connect = useCallback(() => {
    if (isConnecting || address) return;
    setIsConnecting(true);

    connectStacksWallet({ network: NETWORK })
      .then((response) => {
        const legacyData = getLegacyUserData();
        setUserData(legacyData);
        setAddress(
          getStacksAddress(response) ||
          getStacksAddress(getStacksConnectStorage()) ||
          getStacksAddress(legacyData)
        );
      })
      .catch((error) => {
        if (error?.code !== -31001) {
          console.error('Failed to connect Stacks wallet:', error);
        }
      })
      .finally(() => {
        setIsConnecting(false);
      });
  }, [isConnecting, address]);

  /** disconnect - Clear wallet session data and reset all connection state. */
  const disconnect = useCallback(() => {
    disconnectStacksWallet();
    setUserData(null);
    setAddress(null);
    setIsConnecting(false);
  }, []);

  // Restore wallet session from storage on initial mount (no re-run needed)
  useEffect(() => {
    const legacyData = getLegacyUserData();
    setUserData(legacyData);
    setAddress(getStacksAddress(getStacksConnectStorage()) || getStacksAddress(legacyData));
  }, []);

  return {
    address,
    userData,
    isConnected: Boolean(address),
    isSignedIn: Boolean(address),
    displayAddress: address ? formatAddress(address) : null,
    isConnecting,
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
