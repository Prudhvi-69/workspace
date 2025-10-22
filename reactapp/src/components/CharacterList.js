import React from 'react';

const CharacterList = ({ characterList, onTogglePremium }) => {
  return (
    <div className="character-list">
      <h2>🎭 Character Database ({characterList.length})</h2>
      {characterList.length === 0 ? (
        <div className="no-characters">No characters found in database 🔍</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {characterList.map(character => (
            <li key={character.id} className={`character-item ${character.premium ? 'premium' : ''}`}>
              <div className="character-info">
                <div className="character-name">{character.name}</div>
                <div className="anime-series">📺 {character.anime}</div>
                <div className="phone-details">📱 {character.brand} - {character.specs}</div>
              </div>
              <button
                className={`premium-button ${character.premium ? 'premium' : 'standard'}`}
                onClick={() => onTogglePremium(character.id)}
              >
                {character.premium ? '⭐ Premium' : '📱 Standard'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterList;