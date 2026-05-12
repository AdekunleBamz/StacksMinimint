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

export function normalizeToastMessage(message) {
  if (message == null) return '';
  return typeof message === 'string' ? message.trim() : String(message).trim();
}

export function normalizeToastType(type) {
  // Unknown toast types fall back to info so callers do not render unsupported variants.
  return TOAST_VALID_TYPES.includes(type) ? type : 'info'
}

export function normalizeToastDuration(duration, fallback = TOAST_DURATION) {
  return Number.isFinite(duration) ? Math.max(duration, 0) : fallback
}

export function trimToastQueue(nextToasts, maxToasts = MAX_TOASTS) {
  if (maxToasts <= 0) {
    return { trimmedToasts: [], removedToasts: nextToasts }
  }

  if (nextToasts.length <= maxToasts) {
    return { trimmedToasts: nextToasts, removedToasts: [] }
  }

  return {
    trimmedToasts: nextToasts.slice(-maxToasts),
    removedToasts: nextToasts.slice(0, nextToasts.length - maxToasts)
  }
}

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
    const normalizedMessage = normalizeToastMessage(message)
    const safeType = normalizeToastType(type)

    if (!normalizedMessage) {
      return null
    }

    toastIdRef.current += 1
    const id = toastIdRef.current
    const toast = { id, message: normalizedMessage, type: safeType }
    
    setToasts(prev => {
      const nextToasts = [...prev, toast]
      const { trimmedToasts, removedToasts } = trimToastQueue(nextToasts, MAX_TOASTS)

      removedToasts.forEach((removedToast) => {
        const staleTimer = timersRef.current.get(removedToast.id)
        if (staleTimer) {
          clearTimeout(staleTimer)
          timersRef.current.delete(removedToast.id)
        }
      })

      return trimmedToasts
    })

    const safeDuration = normalizeToastDuration(duration, TOAST_DURATION)

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

  const persistent = useCallback((message, type = 'info') => {
    return addToast(message, type, 0);
  }, [addToast])

  return {
    toasts,
    addToast,
    showToast: addToast,
    removeToast,
    success,
    error,
    warning,
    info,
    persistent,
    clearAll,
    count: toasts.length,
    hasToasts: toasts.length > 0,
    latestToast: toasts.length > 0 ? toasts[toasts.length - 1] : null,
  }
}

/**
 * Default export for useToast hook.
 * @type {() => UseToastReturn}
 */
export default useToast
