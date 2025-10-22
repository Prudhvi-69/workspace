import React from 'react';

const DCLoader = () => {
  return (
    <div className="dc-loader">
      <div className="bat-signal"></div>
      <p style={{ fontSize: '16px', color: '#f39c12', marginTop: '20px' }}>
        Accessing Arkham database... 🦇
      </p>
    </div>
  );
};

export default DCLoader;