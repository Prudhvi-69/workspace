import React from 'react';

const MarvelLoader = () => {
  return (
    <div className="marvel-loader">
      <div className="shield-spinner"></div>
      <p style={{ fontSize: '16px', color: '#3498db', marginTop: '20px' }}>
        Connecting to S.H.I.E.L.D. database... 🛡️
      </p>
    </div>
  );
};

export default MarvelLoader;