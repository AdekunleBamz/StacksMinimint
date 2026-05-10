/**
 * ErrorBoundary component for catching JavaScript errors in child components.
 * 
 * Implements React's Error Boundary lifecycle methods to display a fallback UI
 * when an error occurs in the component tree. Logs errors to console for debugging.
 * 
 * @module ErrorBoundary
 */

import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

/**
 * Error messages for common error types to provide user-friendly feedback.
 * @type {Object.<string, string>}
 */
const ERROR_MESSAGES = {
  default: 'The application encountered an unexpected error.',
  network: 'Unable to connect to the network. Please check your internet connection.',
  wallet: 'Wallet connection failed. Please try reconnecting your wallet.',
  contract: 'Contract interaction failed. Please try again.',
  timeout: 'Request timed out. Please try again.'
};

/**
 * Determines the appropriate error message based on the error type.
 * @param {Error} error - The error object to analyze.
 * @returns {string} A user-friendly error message.
 */
function getErrorMessage(error) {
  if (!error) return ERROR_MESSAGES.default;

  const message = error.message?.toLowerCase() || '';

  if (message.includes('network') || message.includes('fetch') || message.includes('connection')) {
    return ERROR_MESSAGES.network;
  }
  if (message.includes('wallet') || message.includes('connect') || message.includes('disconnected')) {
    return ERROR_MESSAGES.wallet;
  }
  if (message.includes('contract') || message.includes('transaction') || message.includes('clar')) {
    return ERROR_MESSAGES.contract;
  }
  if (message.includes('timeout') || message.includes('timed out')) {
    return ERROR_MESSAGES.timeout;
  }

  return ERROR_MESSAGES.default;
}

/**
 * A standard React Error Boundary component to catch JavaScript errors
 * anywhere in their child component tree.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorMessage: getErrorMessage(error) };
  }

  componentDidCatch(error, errorInfo) {
    // Extract the first failing component name from the stack for clearer logs
    const failingComponent = errorInfo?.componentStack?.trim()?.split('\n')?.[1]?.trim() ?? 'Unknown';
    console.error(`ErrorBoundary caught an error in ${failingComponent}:`, error);
    console.error('Error Info:', errorInfo);

    // Store error info for display
    this.setState({ errorInfo });

    // In production, you might want to log to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      const userMessage = getErrorMessage(this.state.error);
      const userMessageLength = userMessage.length;
      const rawMessage = this.state.error?.message?.trim();
      const hasRawMessage = Boolean(rawMessage && rawMessage !== userMessage);
      const isDevelopment = process.env.NODE_ENV !== 'production';

      return (
        <div className="error-boundary" data-state="error" data-message-length={String(userMessageLength)} data-has-raw-message={hasRawMessage ? 'true' : 'false'} role="alert" aria-live="assertive" aria-atomic="true" aria-label="Application error boundary" aria-describedby="error-boundary-message" title="Application error fallback">
          <div className="error-boundary__icon" aria-hidden="true">⚠️</div>
          <h2 className="error-boundary__title">Something went wrong.</h2>
          <p id="error-boundary-message" className="error-boundary__message">{userMessage}</p>
          {hasRawMessage && (
            <p className="error-boundary__message">{rawMessage}</p>
          )}

          {/* Show detailed error info only in development */}
          {isDevelopment && this.state.error && (
            <details className="error-boundary__details">
              <summary title="Show technical diagnostics">Technical details (development only)</summary>
              <pre>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}

          <div className="error-boundary__actions" data-actions-count="2">
            <button
              type="button"
              onClick={this.handleReset}
              className="error-boundary__button error-boundary__button--secondary"
              title="Try rendering this section again"
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="error-boundary__button"
              title="Reload the application in this browser tab"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node
};
