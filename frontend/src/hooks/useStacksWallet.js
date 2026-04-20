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
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import { NETWORK } from '../contract';
import { formatAddress } from '../utils/collection';

/** Permissions granted to this app when the user connects their Stacks wallet. */
const WALLET_APP_PERMISSIONS = ['store_write', 'publish_data'];
/** Display name used for this application in the wallet connect modal. */
const WALLET_APP_NAME = 'StacksMinimint';

const appConfig = new AppConfig(WALLET_APP_PERMISSIONS);
export const userSession = new UserSession({ appConfig });

export function getStacksAddress(data) {
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

  if (typeof candidateAddress !== 'string') return null

  const normalizedAddress = candidateAddress.trim()
  return normalizedAddress || null
}

export function useStacksWallet() {
  const [userData, setUserData] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(() => {
    if (isConnecting || address) return;
    setIsConnecting(true);
    try {
      showConnect({
        appDetails: {
          name: WALLET_APP_NAME,
          icon: typeof window !== 'undefined' ? window.location.origin + '/favicon.png' : '',
        },
        redirectTo: '/',
        onFinish: () => {
          try {
            const data = userSession.loadUserData();
            setUserData(data);
            setAddress(getStacksAddress(data));
          } finally {
            setIsConnecting(false);
          }
        },
        onCancel: () => {
          setIsConnecting(false);
        },
        userSession
      });
    } catch (error) {
      console.error('Failed to open wallet connect modal:', error);
      setIsConnecting(false);
    }
  }, [isConnecting, address]);

  const disconnect = useCallback(() => {
    userSession.signUserOut();
    setUserData(null);
    setAddress(null);
    setIsConnecting(false);
    window.sessionStorage.removeItem('stacks-wallet-session');
  }, []);

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const data = userSession.loadUserData();
      setUserData(data);
      setAddress(getStacksAddress(data));
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
