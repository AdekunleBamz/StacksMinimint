/**
 * useStorage hooks for persistent state management.
 * 
 * Provides useLocalStorage and useSessionStorage hooks with
 * automatic JSON serialization, SSR support, and cross-tab synchronization.
 * 
 * @module useStorage
 */
import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const normalizedKey = typeof key === 'string' ? key.trim() : ''
  const hasValidKey = normalizedKey.length > 0

  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined') return initialValue
      if (!hasValidKey) {
        console.warn(`useLocalStorage: invalid key "${key}", using in-memory state`)
        return initialValue
      }
      const item = window.localStorage.getItem(normalizedKey)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when value changes
  const setValue = useCallback((value) => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) {
        setStoredValue((currentValue) => (value instanceof Function ? value(currentValue) : value))
        return
      }
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value
        window.localStorage.setItem(normalizedKey, JSON.stringify(valueToStore))
        return valueToStore
      })
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [normalizedKey, hasValidKey])

  // Remove from localStorage
  const removeValue = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) {
        setStoredValue(initialValue)
        return
      }
      window.localStorage.removeItem(normalizedKey)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [normalizedKey, initialValue, hasValidKey])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidKey) return

    const handleStorage = (event) => {
      if (event.key !== normalizedKey && event.key !== null) return
      try {
        const nextValue = window.localStorage.getItem(normalizedKey)
        setStoredValue(nextValue ? JSON.parse(nextValue) : initialValue)
      } catch (error) {
        console.warn(`Error syncing localStorage key "${key}":`, error)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [normalizedKey, initialValue, hasValidKey])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidKey) return

    try {
      const item = window.localStorage.getItem(normalizedKey)
      setStoredValue(item ? JSON.parse(item) : initialValue)
    } catch (error) {
      console.warn(`Error reloading localStorage key "${key}":`, error)
      setStoredValue(initialValue)
    }
  }, [normalizedKey, initialValue, hasValidKey])

  return [storedValue, setValue, removeValue, { hasValue: storedValue !== null && storedValue !== undefined, isReady: typeof window !== 'undefined' }]
}

/**
 * Default export for useStorage hooks.
 * Provides both useLocalStorage and useSessionStorage.
 */
export default { useLocalStorage, useSessionStorage }

export function useSessionStorage(key, initialValue) {
  const normalizedKey = typeof key === 'string' ? key.trim() : ''
  const hasValidKey = normalizedKey.length > 0

  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return initialValue
      const item = window.sessionStorage.getItem(normalizedKey)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) {
        setStoredValue((currentValue) => (value instanceof Function ? value(currentValue) : value))
        return
      }
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value
        window.sessionStorage.setItem(normalizedKey, JSON.stringify(valueToStore))
        return valueToStore
      })
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error)
    }
  }, [normalizedKey, hasValidKey])

  const removeValue = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) {
        setStoredValue(initialValue)
        return
      }
      window.sessionStorage.removeItem(normalizedKey)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing sessionStorage key "${key}":`, error)
    }
  }, [normalizedKey, initialValue, hasValidKey])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidKey) return

    const handleStorage = (event) => {
      if (event.storageArea !== window.sessionStorage) return
      if (event.key !== normalizedKey && event.key !== null) return

      try {
        const nextValue = window.sessionStorage.getItem(normalizedKey)
        setStoredValue(nextValue ? JSON.parse(nextValue) : initialValue)
      } catch (error) {
        console.warn(`Error syncing sessionStorage key "${key}":`, error)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [normalizedKey, initialValue, hasValidKey])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidKey) return

    try {
      const item = window.sessionStorage.getItem(normalizedKey)
      setStoredValue(item ? JSON.parse(item) : initialValue)
    } catch (error) {
      console.warn(`Error reloading sessionStorage key "${key}":`, error)
      setStoredValue(initialValue)
    }
  }, [normalizedKey, initialValue, hasValidKey])

  return [storedValue, setValue, removeValue, { hasValue: storedValue !== null && storedValue !== undefined }]
}
