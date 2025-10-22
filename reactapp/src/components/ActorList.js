import React from 'react';

const ActorList = ({ actorList, onToggleVerified }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="actor-list">
      <h2>🎤 Voice Actor Reviews ({actorList.length})</h2>
      {actorList.length === 0 ? (
        <div className="no-actors">No voice actor reviews found 🎭</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {actorList.map(actor => (
            <li key={actor.id} className={`actor-item ${actor.verified ? 'verified' : ''}`}>
              <div className="actor-info">
                <div className="actor-name">{actor.name}</div>
                <div className="character-name">🎭 Voices: {actor.character}</div>
                <div className="phone-review">📱 {actor.phone}</div>
                <div className="rating-stars">{renderStars(actor.rating)} ({actor.rating}/5)</div>
              </div>
              <button
                className={`verify-button ${actor.verified ? 'verified' : 'unverified'}`}
                onClick={() => onToggleVerified(actor.id)}
              >
                {actor.verified ? '✅ Verified' : '⏳ Pending'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActorList;