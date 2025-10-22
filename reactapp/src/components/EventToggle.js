import React from 'react';

const EventToggle = ({ showFeaturedOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Conventions</h3>
      <label>
        <input
          type="checkbox"
          checked={showFeaturedOnly}
          onChange={onToggle}
        />
        {showFeaturedOnly ? ' ⭐ Showing featured conventions only' : ' 📋 Showing all conventions'}
      </label>
      <p>
        {showFeaturedOnly 
          ? 'Toggle off to see complete convention directory' 
          : 'Toggle on to see only featured anime conventions'}
      </p>
    </div>
  );
};

export default EventToggle;