import React from 'react';

const AnimeList = ({ animeList, onToggleWatched }) => {
  return (
    <div className="anime-list">
      <h2>📺 Anime Collection ({animeList.length})</h2>
      {animeList.length === 0 ? (
        <div className="no-anime">No anime found in collection 😢</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {animeList.map(anime => (
            <li key={anime.id} className={`anime-item ${anime.watched ? 'watched' : ''}`}>
              <div className="anime-info">
                <div className="anime-name">{anime.name}</div>
                <div className="mobile-name">📱 {anime.phone}</div>
              </div>
              <button
                className={`watch-button ${anime.watched ? 'watched' : 'not-watched'}`}
                onClick={() => onToggleWatched(anime.id)}
              >
                {anime.watched ? '✅ Watched' : '⏳ Not Watched'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnimeList;