import React from 'react';

const AnimeToggle = ({ showWatchedOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Options</h3>
      <label>
        <input
          type="checkbox"
          checked={showWatchedOnly}
          onChange={onToggle}
        />
        {showWatchedOnly ? ' 📺 Showing watched anime only' : ' 📋 Showing all anime'}
      </label>
      <p>
        {showWatchedOnly 
          ? 'Toggle off to see your complete collection' 
          : 'Toggle on to see only watched anime'}
      </p>
    </div>
  );
};

export default AnimeToggle;