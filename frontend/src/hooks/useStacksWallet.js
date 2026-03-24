import { useState, useEffect, useCallback } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import { NETWORK } from '../contract';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

function getStacksAddress(data) {
  if (!data?.profile?.stxAddress) return null

  return NETWORK === 'mainnet'
    ? data.profile.stxAddress.mainnet || null
    : data.profile.stxAddress.testnet || null
}

export function useStacksWallet() {
  const [userData, setUserData] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(() => {
    setIsConnecting(true);
    try {
      showConnect({
        appDetails: {
          name: 'StacksMinimint',
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
  }, []);

  const disconnect = useCallback(() => {
    userSession.signUserOut();
    setUserData(null);
    setAddress(null);
    setIsConnecting(false);
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
    isConnecting,
    connect,
    disconnect,
    network: NETWORK === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET
  };
}
