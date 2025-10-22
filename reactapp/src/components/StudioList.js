import React from 'react';

const StudioList = ({ studioList, onToggleRelease }) => {
  return (
    <div className="studio-list">
      <h2>🎬 Studio Game Database ({studioList.length})</h2>
      {studioList.length === 0 ? (
        <div className="no-studios">No studios found in database 🎮</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {studioList.map(studio => (
            <li key={studio.id} className={`studio-item ${studio.released ? 'released' : ''}`}>
              <div className="studio-info">
                <div className="studio-name">{studio.name}</div>
                <div className="game-name">🎮 {studio.game}</div>
                <div className="platform-info">📱 {studio.platform}</div>
              </div>
              <button
                className={`release-button ${studio.released ? 'released' : 'unreleased'}`}
                onClick={() => onToggleRelease(studio.id)}
              >
                {studio.released ? '✅ Released' : '⏳ In Development'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudioList;