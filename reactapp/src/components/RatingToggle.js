import React from 'react';

const RatingToggle = ({ showVerifiedOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Reviews</h3>
      <label>
        <input
          type="checkbox"
          checked={showVerifiedOnly}
          onChange={onToggle}
        />
        {showVerifiedOnly ? ' ✅ Showing verified reviews only' : ' 📋 Showing all actor reviews'}
      </label>
      <p>
        {showVerifiedOnly 
          ? 'Toggle off to see complete review database' 
          : 'Toggle on to see only verified voice actor reviews'}
      </p>
    </div>
  );
};

export default RatingToggle;