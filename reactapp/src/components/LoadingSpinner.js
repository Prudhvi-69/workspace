import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p style={{ marginLeft: '20px', fontSize: '18px' }}>
        Connecting to the cantina database... 🌌
      </p>
    </div>
  );
};

export default LoadingSpinner;