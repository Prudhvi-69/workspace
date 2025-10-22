import React from 'react';

const CookingLoader = () => {
  return (
    <div className="cooking-loader">
      <div className="cooking-animation">
        <div className="cooking-pot"></div>
        <div className="cooking-pot" style={{ animationDelay: '0.3s' }}></div>
        <div className="cooking-pot" style={{ animationDelay: '0.6s' }}></div>
      </div>
      <p style={{ fontSize: '16px', color: '#ff6f00' }}>
        Cooking up your recipes... 🍳
      </p>
    </div>
  );
};

export default CookingLoader;