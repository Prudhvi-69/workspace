import React from 'react';

const PlatformToggle = ({ showReleasedOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Games</h3>
      <label>
        <input
          type="checkbox"
          checked={showReleasedOnly}
          onChange={onToggle}
        />
        {showReleasedOnly ? ' ✅ Showing released games only' : ' 📋 Showing all studio games'}
      </label>
      <p>
        {showReleasedOnly 
          ? 'Toggle off to see complete game database' 
          : 'Toggle on to see only released mobile games'}
      </p>
    </div>
  );
};

export default PlatformToggle;