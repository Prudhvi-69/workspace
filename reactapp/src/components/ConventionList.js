import React from 'react';

const ConventionList = ({ conventionList, onToggleFeatured }) => {
  const formatDownloads = (downloads) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };

  return (
    <div className="convention-list">
      <h2>🎪 Convention Directory ({conventionList.length})</h2>
      {conventionList.length === 0 ? (
        <div className="no-conventions">No conventions found in directory 🎭</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {conventionList.map(convention => (
            <li key={convention.id} className={`convention-item ${convention.featured ? 'featured' : ''}`}>
              <div className="convention-info">
                <div className="convention-name">{convention.name}</div>
                <div className="convention-location">📍 {convention.location}</div>
                <div className="app-name">📱 {convention.app}</div>
                <div className="download-count">⬇️ {formatDownloads(convention.downloads)} downloads</div>
              </div>
              <button
                className={`featured-button ${convention.featured ? 'featured' : 'regular'}`}
                onClick={() => onToggleFeatured(convention.id)}
              >
                {convention.featured ? '⭐ Featured' : '📋 Regular'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConventionList;