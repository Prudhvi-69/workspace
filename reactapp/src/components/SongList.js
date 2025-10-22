import React from 'react';

const SongList = ({ songs, onToggleFavorite, onDeleteSong }) => {
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="song-list">
      <h2>🎵 Tamil Songs Library ({songs.length} பாடல்கள்)</h2>
      {songs.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '20px', color: '#7f8c8d' }}>
          No Tamil songs in library. Add some melodies! 🎶
        </div>
      ) : (
        <div className="song-grid">
          {songs.map(song => (
            <div key={song.id} className={`song-item ${song.favorite ? 'favorite' : ''}`}>
              <div className="favorite-indicator">
                {song.favorite ? '❤️' : '🤍'}
              </div>
              
              <div className="song-title">{song.title}</div>
              <div className="song-artist">🎤 {song.artist}</div>
              <div className="song-movie">🎬 {song.movie}</div>
              
              <div className="song-details">
                <span>📅 {song.year}</span>
                <span>⏱️ {formatDuration(song.duration)}</span>
              </div>
              
              <div className="song-genre">🎵 {song.genre}</div>
              
              <div className="song-controls">
                <button 
                  className={`control-btn ${song.favorite ? 'unfavorite-btn' : 'favorite-btn'}`}
                  onClick={() => onToggleFavorite(song.id)}
                >
                  {song.favorite ? 'Remove ❤️' : 'Add ❤️'}
                </button>
                <button 
                  className="control-btn delete-btn"
                  onClick={() => onDeleteSong(song.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;