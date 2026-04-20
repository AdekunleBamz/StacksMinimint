/**
 * useToast hook for managing toast notifications.
 * 
 * Provides a flexible toast system with auto-dismiss, multiple types
 * (success, error, warning, info), and manual control methods.
 * Handles timer cleanup and prevents memory leaks.
 * 
 * @module useToast
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { MAX_TOASTS, TOAST_DURATION } from '../constants'

/** Valid toast notification types accepted by addToast. */
const TOAST_VALID_TYPES = ['success', 'error', 'warning', 'info'];

export function useToast() {
  const [toasts, setToasts] = useState([])
  const toastIdRef = useRef(0)

  const timersRef = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
  }, [])

  const addToast = useCallback((message, type = 'info', duration = TOAST_DURATION) => {
    const normalizedMessage = typeof message === 'string' ? message.trim() : message
    const validTypes = TOAST_VALID_TYPES
    const safeType = validTypes.includes(type) ? type : 'info'

    if (!normalizedMessage) {
      return null
    }

    toastIdRef.current += 1
    const id = toastIdRef.current
    const toast = { id, message: normalizedMessage, type: safeType }
    
    setToasts(prev => {
      const nextToasts = [...prev, toast]
      if (nextToasts.length <= MAX_TOASTS) {
        return nextToasts
      }

      const trimmedToasts = nextToasts.slice(-MAX_TOASTS)
      const removedToasts = nextToasts.slice(0, nextToasts.length - MAX_TOASTS)
      removedToasts.forEach((removedToast) => {
        const staleTimer = timersRef.current.get(removedToast.id)
        if (staleTimer) {
          clearTimeout(staleTimer)
          timersRef.current.delete(removedToast.id)
        }
      })
      return trimmedToasts
    })

    const safeDuration = Number.isFinite(duration) ? Math.max(duration, 0) : TOAST_DURATION

    if (safeDuration > 0) {
      const timer = setTimeout(() => {
        removeToast(id)
      }, safeDuration)
      timersRef.current.set(id, timer)
    }

    return id
  }, [removeToast])

  const success = useCallback((message, duration) => {
    return addToast(message, 'success', duration)
  }, [addToast])

  const error = useCallback((message, duration) => {
    return addToast(message, 'error', duration)
  }, [addToast])

  const warning = useCallback((message, duration) => {
    return addToast(message, 'warning', duration)
  }, [addToast])

  const info = useCallback((message, duration) => {
    return addToast(message, 'info', duration)
  }, [addToast])

  const clearAll = useCallback(() => {
    setToasts([])
    timersRef.current.forEach((timer) => clearTimeout(timer))
    timersRef.current.clear()
  }, [])

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer))
      timersRef.current.clear()
    }
  }, [])

  return {
    toasts,
    addToast,
    showToast: addToast,
    removeToast,
    success,
    error,
    warning,
    info,
    clearAll
  }
}

/**
 * Default export for useToast hook.
 * @type {() => UseToastReturn}
 */
export default useToast
