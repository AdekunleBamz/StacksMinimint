/**
 * Focus trap utility for accessible modal dialogs.
 * 
 * Ensures keyboard focus remains within a modal or dialog element,
 * cycling through focusable elements when Tab is pressed.
 * 
 * @module focusTrap
 */

/**
 * Selector for focusable elements.
 * Includes buttons, links, inputs, textareas, selects, and elements with tabindex.
 * @type {string}
 */
const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

/**
 * Get all focusable elements within a container.
 * @param {HTMLElement} container - The container element
 * @returns {HTMLElement[]} Array of focusable elements
 */
function getFocusableElements(container) {
  if (!container) return []
  const elements = container.querySelectorAll(FOCUSABLE_SELECTOR);
  return Array.from(elements).filter(
    el => !el.hasAttribute('disabled') && el.offsetParent !== null && !el.hidden
  );
}

/**
 * Creates a focus trap within the specified container.
 * Returns an object with activate and deactivate methods.
 * 
 * @param {HTMLElement} container - The container to trap focus within
 * @param {Object} [options] - Configuration options
   * @param {string|HTMLElement} [options.initialFocus] - CSS selector or element to focus initially
 * @param {boolean} [options.escapeDeactivates=true] - Whether Escape key deactivates trap
 * @param {function} [options.onDeactivate] - Callback when trap is deactivated
 * @returns {Object} Focus trap instance with activate/deactivate methods
 * 
 * @example
 * const trap = createFocusTrap(modalElement, {
 *   initialFocus: '.first-input',
 *   escapeDeactivates: true,
 *   onDeactivate: () => console.log('Focus trap deactivated')
 * });
 * 
 * trap.activate();
 * // Later...
 * trap.deactivate();
 */
export function createFocusTrap(container, options = {}) {
  const {
    initialFocus,
    escapeDeactivates = true,
    onDeactivate
  } = options;

  let previousActiveElement = null;
  let isActive = false;

  /**
   * Handle keydown events for focus trapping.
   * @param {KeyboardEvent} event - The keyboard event
   */
  function handleKeyDown(event) {
    if (!isActive) return;

    // Handle Escape key
    if (escapeDeactivates && event.key === 'Escape') {
      event.preventDefault();
      deactivate();
      return;
    }

    // Handle Tab key for focus cycling
    if (event.key === 'Tab') {
      const focusableElements = getFocusableElements(container);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab: Move focus backwards
      if (event.shiftKey) {
        if (document.activeElement === firstElement || document.activeElement === container) {
          event.preventDefault();
          lastElement.focus();
        }
      } 
      // Tab: Move focus forwards
      else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  /**
   * Activate the focus trap.
   */
  function activate() {
    if (isActive) return;

    previousActiveElement = document.activeElement;
    isActive = true;

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Focus the initial element or first focusable element
    requestAnimationFrame(() => {
      const focusableElements = getFocusableElements(container);
      if (focusableElements.length > 0) {
        if (initialFocus) {
          const initialElement = typeof initialFocus === 'string'
            ? container.querySelector(initialFocus)
            : initialFocus;
          if (initialElement) {
            initialElement.focus();
            return;
          }
        }
        focusableElements[0].focus();
      } else {
        // If no focusable elements, focus the container itself
        container.focus();
      }
    });
  }

  /**
   * Deactivate the focus trap and restore previous focus.
   */
  function deactivate() {
    if (!isActive) return;

    isActive = false;
    document.removeEventListener('keydown', handleKeyDown);

    // Restore previous focus
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }

    previousActiveElement = null;
    onDeactivate?.();
  }

  return {
    activate,
    get isActive() { return isActive; },
    deactivate
  };
}

/**
 * Convenience function to trap focus once and auto-cleanup.
 * Useful for simple modal implementations.
 * 
 * @param {HTMLElement} container - The container to trap focus within
 * @param {Object} [options] - Configuration options
 * @returns {function} Cleanup function to deactivate the trap
 * 
 * @example
 * const cleanup = trapFocusOnce(modalElement);
 * // Later, when modal closes:
 * cleanup();
 */
export function trapFocusOnce(container, options = {}) {
  const trap = createFocusTrap(container, options);
  trap.activate();
  return trap.deactivate;
}

/**
 * Default export for focus trap utilities.
 */
export default {
  createFocusTrap,
  trapFocusOnce,
  getFocusableElements
};