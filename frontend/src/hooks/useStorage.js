import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const hasValidKey = typeof key === 'string' && key.length > 0

  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return initialValue
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when value changes
  const setValue = useCallback((value) => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
        return valueToStore
      })
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, hasValidKey])

  // Remove from localStorage
  const removeValue = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue, hasValidKey])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidKey) return

    const handleStorage = (event) => {
      if (event.key !== key) return
      try {
        setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue)
      } catch (error) {
        console.warn(`Error syncing localStorage key "${key}":`, error)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key, initialValue, hasValidKey])

  return [storedValue, setValue, removeValue]
}

export function useSessionStorage(key, initialValue) {
  const hasValidKey = typeof key === 'string' && key.length > 0

  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return initialValue
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
        return valueToStore
      })
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error)
    }
  }, [key, hasValidKey])

  const removeValue = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !hasValidKey) return
      window.sessionStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing sessionStorage key "${key}":`, error)
    }
  }, [key, initialValue, hasValidKey])

  return [storedValue, setValue, removeValue]
}
