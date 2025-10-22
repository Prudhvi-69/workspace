import React, { useState } from 'react';

const SongForm = ({ onAddSong }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    movie: '',
    year: '',
    duration: '',
    genre: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.artist.trim() && formData.movie.trim() && formData.year.trim() && formData.duration.trim() && formData.genre.trim()) {
      onAddSong({
        title: formData.title,
        artist: formData.artist,
        movie: formData.movie,
        year: parseInt(formData.year),
        duration: parseInt(formData.duration),
        genre: formData.genre
      });
      setFormData({ title: '', artist: '', movie: '', year: '', duration: '', genre: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="song-form">
      <h3>🎵 Add New Tamil Song (புதிய பாடல் சேர்க்க)</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="title"
            placeholder="Song title (e.g., Vennilave Vennilave)..."
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist name (e.g., A.R. Rahman)..."
            value={formData.artist}
            onChange={handleChange}
          />
          <input
            type="text"
            name="movie"
            placeholder="Movie name (e.g., Minsara Kanavu)..."
            value={formData.movie}
            onChange={handleChange}
          />
          <input
            type="number"
            name="year"
            placeholder="Release year..."
            min="1950"
            max="2024"
            value={formData.year}
            onChange={handleChange}
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (seconds)..."
            min="60"
            max="600"
            value={formData.duration}
            onChange={handleChange}
          />
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="">Select Genre...</option>
            <option value="Melody">Melody (மெலடி)</option>
            <option value="Kuthu">Kuthu (குத்து)</option>
            <option value="Folk">Folk (நாட்டுப்புற)</option>
            <option value="Classical">Classical (கிளாசிக்கல்)</option>
            <option value="Devotional">Devotional (பக்தி)</option>
            <option value="Love">Love (காதல்)</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          🎶 Add to Library
        </button>
      </form>
    </div>
  );
};

export default SongForm;