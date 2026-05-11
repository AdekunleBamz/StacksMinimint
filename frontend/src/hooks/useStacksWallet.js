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

function pickStacksAddress(addresses) {
  if (!Array.isArray(addresses)) return null;

  const normalizedAddresses = addresses
    .map((entry) => normalizeStacksAddress(typeof entry === 'string' ? entry : entry?.address))
    .filter(Boolean)
    .filter(isStacksAddress);

  return normalizedAddresses.find((address) => getAddressNetwork(address) === NETWORK) || normalizedAddresses[0] || null;
}

export function getStacksAddress(data) {
  const responseAddress = pickStacksAddress(data?.addresses);
  if (responseAddress) return responseAddress;

  const storedAddress = pickStacksAddress(data?.addresses?.stx);
  if (storedAddress) return storedAddress;

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

function getLegacyUserData() {
  try {
    return userSession.isUserSignedIn() ? userSession.loadUserData() : null;
  } catch (error) {
    console.warn('Failed to read legacy Stacks session data:', error);
    return null;
  }
}

export function useStacksWallet() {
  const [userData, setUserData] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

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

  const disconnect = useCallback(() => {
    disconnectStacksWallet();
    setUserData(null);
    setAddress(null);
    setIsConnecting(false);
  }, []);

  useEffect(() => {
    if (isStacksConnectConnected()) {
      const legacyData = getLegacyUserData();
      setUserData(legacyData);
      setAddress(getStacksAddress(getStacksConnectStorage()) || getStacksAddress(legacyData));
      return;
    }

    const legacyData = getLegacyUserData();
    if (legacyData) {
      setUserData(legacyData);
      setAddress(getStacksAddress(legacyData));
      return;
    }

    setUserData(null);
    setAddress(null);
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
