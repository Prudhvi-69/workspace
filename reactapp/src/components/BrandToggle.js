import React from 'react';

const BrandToggle = ({ showPremiumOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Characters</h3>
      <label>
        <input
          type="checkbox"
          checked={showPremiumOnly}
          onChange={onToggle}
        />
        {showPremiumOnly ? ' ⭐ Showing premium users only' : ' 📋 Showing all characters'}
      </label>
      <p>
        {showPremiumOnly 
          ? 'Toggle off to see complete character database' 
          : 'Toggle on to see only premium phone users'}
      </p>
    </div>
  );
};

export default BrandToggle;