import React from 'react';

const HeroList = ({ heroes, onUpdateStatus }) => {
  return (
    <div className="hero-list">
      <h2>🦸 S.H.I.E.L.D. Hero Registry ({heroes.length} heroes)</h2>
      {heroes.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '20px', color: '#95a5a6' }}>
          No heroes registered. The world needs more heroes! 🌍
        </div>
      ) : (
        <div className="hero-grid">
          {heroes.map(hero => (
            <div key={hero.id} className={`hero-item ${hero.status.toLowerCase()}`}>
              <div className={`status-indicator ${hero.status.toLowerCase()}-status`}>
                {hero.status === 'Active' ? '🟢 ACTIVE' : '🔴 INACTIVE'}
              </div>
              
              <div className="hero-name">{hero.name}</div>
              <div className="hero-real-name">👤 {hero.realName}</div>
              <div className="hero-mission">🎯 {hero.mission}</div>
              <div className="hero-team">🏢 {hero.team}</div>
              <div className="hero-power">⚡ Power Level: {hero.power}</div>
              
              <div className="status-controls">
                <button 
                  className="status-btn active-btn"
                  onClick={() => onUpdateStatus(hero.id, 'Active')}
                >
                  Activate
                </button>
                <button 
                  className="status-btn inactive-btn"
                  onClick={() => onUpdateStatus(hero.id, 'Inactive')}
                >
                  Deactivate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroList;