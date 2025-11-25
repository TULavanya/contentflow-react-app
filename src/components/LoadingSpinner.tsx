import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '40px'
    }}>
      <div className="loading-spinner" style={{
        width: '60px',
        height: '60px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #2563eb',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }}></div>
      <p style={{
        fontSize: '1.2em',
        color: '#666',
        fontWeight: 500
      }}>Loading content...</p>
    </div>
  );
};

export default LoadingSpinner;

