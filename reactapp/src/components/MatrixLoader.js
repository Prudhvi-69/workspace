import React from 'react';

const MatrixLoader = () => {
  return (
    <div className="matrix-loader">
      <div className="matrix-rain">
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
      </div>
      <p style={{ fontSize: '16px', color: '#00ff00' }}>
        Accessing Matrix database... 🔴
      </p>
    </div>
  );
};

export default MatrixLoader;