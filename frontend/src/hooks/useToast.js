import { useCallback, useEffect, useRef, useState } from 'react'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const timersRef = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
  }, [])

  const addToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = ++toastId
    const toast = { id, message, type }
    
    setToasts(prev => [...prev, toast])

    if (duration > 0) {
      const timer = setTimeout(() => {
        removeToast(id)
      }, duration)
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
