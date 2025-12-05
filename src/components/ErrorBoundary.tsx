import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error('ErrorBoundary caught error:', error);
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error details:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: 'ErrorBoundary'
    });
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // errorTrackingService.log(error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '40px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
        }}>
          <div style={{
            fontSize: '4em',
            marginBottom: '20px',
            animation: 'bounce 2s infinite'
          }}>️</div>
          <h1 style={{ 
            fontSize: '2.5em', 
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Oops! Something went wrong
          </h1>
          <p style={{ 
            fontSize: '1.2em', 
            color: '#666', 
            marginBottom: '30px',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            Don't worry, this happens sometimes. The component encountered an error while loading.
          </p>
          {this.state.error && process.env.NODE_ENV === 'development' && (
            <details style={{ 
              marginBottom: '30px',
              padding: '20px',
              background: '#f8f8f8',
              borderRadius: '12px',
              maxWidth: '700px',
              textAlign: 'left',
              border: '2px solid #e0e0e0'
            }}>
              <summary style={{ 
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#2563eb',
                fontSize: '1.1em'
              }}>
                 Error Details (Development Mode)
              </summary>
              <code style={{ 
                fontSize: '0.9em',
                color: '#d32f2f',
                wordBreak: 'break-word',
                display: 'block',
                padding: '10px',
                background: '#fff5f5',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace'
              }}>
                {this.state.error.toString()}
              </code>
            </details>
          )}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                color: 'white',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1em',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(106, 27, 154, 0.3)'
              }}
            >
               Reload Page
            </button>
            <Link 
              to="/" 
              onClick={() => this.setState({ hasError: false, error: null })}
              style={{
                background: 'rgba(106, 27, 154, 0.1)',
                color: '#2563eb',
                padding: '14px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #2563eb',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
               Go to Homepage
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

