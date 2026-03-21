// Note: Errorboundary module
// Scope: keep ErrorBoundary concerns isolated.

import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

/**
 * A standard React Error Boundary component to catch JavaScript errors
 * anywhere in their child component tree.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary" role="alert" aria-live="assertive">
          <h2 className="error-boundary__title">Something went wrong.</h2>
          <p className="error-boundary__message">
            The application encountered an unexpected error. Please try refreshing the page.
          </p>
          {this.state.error && (
            <pre className="error-boundary__details">
              {this.state.error.toString()}
            </pre>
          )}
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="error-boundary__button"
          >
            Refresh Page
          </button>
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
