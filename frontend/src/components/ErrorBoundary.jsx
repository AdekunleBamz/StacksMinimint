import React from 'react';

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
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '8px',
          margin: '2rem auto',
          maxWidth: '600px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h2 style={{ color: '#cf1322', marginTop: 0 }}>Something went wrong.</h2>
          <p style={{ color: '#434343' }}>
            The application encountered an unexpected error. Please try refreshing the page.
          </p>
          {this.state.error && (
            <pre style={{
              textAlign: 'left',
              padding: '1rem',
              backgroundColor: '#fafafa',
              borderRadius: '4px',
              overflowX: 'auto',
              fontSize: '0.85rem'
            }}>
              {this.state.error.toString()}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
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
