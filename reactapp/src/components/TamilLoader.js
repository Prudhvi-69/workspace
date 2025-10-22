import React from 'react';

const TamilLoader = () => {
  return (
    <div className="tamil-loader">
      <div className="music-notes">
        <span className="note">🎵</span>
        <span className="note">🎶</span>
        <span className="note">🎵</span>
        <span className="note">🎶</span>
      </div>
      <p style={{ fontSize: '16px', color: '#e74c3c', marginTop: '10px' }}>
        Loading Tamil songs... பாடல்கள் ஏற்றப்படுகின்றன... 🎤
      </p>
    </div>
  );
};

export default TamilLoader;