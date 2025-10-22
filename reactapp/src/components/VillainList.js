import React from 'react';

const VillainList = ({ villains, onUpdateStatus, onDeleteVillain }) => {
  const getThreatLevel = (threat) => {
    const levels = ['Low', 'Medium', 'High', 'Extreme', 'Apocalyptic'];
    return levels[threat - 1] || 'Low';
  };

  return (
    <div className="villain-list">
      <h2>💀 Arkham Villain Registry ({villains.length} criminals)</h2>
      {villains.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '20px', color: '#bdc3c7' }}>
          No villains in database. Gotham is safe... for now. 🦇
        </div>
      ) : (
        <div className="villain-grid">
          {villains.map(villain => (
            <div key={villain.id} className={`villain-item ${villain.captured ? 'captured' : 'free'}`}>
              <div className={`status-indicator ${villain.captured ? 'captured-status' : 'free-status'}`}>
                {villain.captured ? '🔒 CAPTURED' : '🚨 AT LARGE'}
              </div>
              
              <div className="villain-name">{villain.name}</div>
              <div className="villain-real-name">👤 {villain.realName}</div>
              <div className="villain-city">🏙️ {villain.city}</div>
              <div className="villain-threat">⚠️ Threat: {getThreatLevel(villain.threat)}</div>
              <div className="villain-scheme">📋 Scheme: {villain.scheme}</div>
              
              <div className="villain-controls">
                <button 
                  className="control-btn capture-btn"
                  onClick={() => onUpdateStatus(villain.id, true)}
                >
                  Capture
                </button>
                <button 
                  className="control-btn release-btn"
                  onClick={() => onUpdateStatus(villain.id, false)}
                >
                  Release
                </button>
                <button 
                  className="control-btn delete-btn"
                  onClick={() => onDeleteVillain(villain.id)}
                >
                  Eliminate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VillainList;