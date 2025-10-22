import React, { useState, useEffect } from 'react';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import TamilLoader from './components/TamilLoader';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      
      if (!response.ok) {
        throw new Error('Failed to fetch songs');
      }
      
      const data = await response.json();
      const tamilSongs = data.slice(0, 6).map(album => ({
        id: album.id,
        title: `${album.title.split(' ')[0]} Paadal`,
        artist: `Singer ${album.userId}`,
        movie: `Film ${album.id}`,
        year: 2020 + (album.id % 4),
        duration: Math.floor(Math.random() * 180) + 120,
        genre: ['Melody', 'Kuthu', 'Folk', 'Classical'][Math.floor(Math.random() * 4)],
        favorite: Math.random() > 0.5
      }));
      
      setSongs(tamilSongs);
    } catch (err) {
      setError('Failed to load Tamil songs. Music server may be down!');
    } finally {
      setLoading(false);
    }
  };

  const addSong = async (newSong) => {
    setLoading(true);
    setError(null);
    setSuccess('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newSong.title,
          userId: 1
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to add song');
      }
      
      const result = await response.json();
      
      const song = {
        id: result.id || Date.now(),
        title: newSong.title,
        artist: newSong.artist,
        movie: newSong.movie,
        year: newSong.year,
        duration: newSong.duration,
        genre: newSong.genre,
        favorite: false
      };
      
      setSongs([...songs, song]);
      setSuccess('புதிய பாடல் வெற்றிகரமாக சேர்க்கப்பட்டது! (New song added successfully!)');
    } catch (err) {
      setError('Failed to add Tamil song. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const song = songs.find(s => s.id === id);
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...song,
          favorite: !song.favorite
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update favorite status');
      }
      
      setSongs(songs.map(song =>
        song.id === id ? { ...song, favorite: !song.favorite } : song
      ));
      setSuccess('Favorite status updated!');
    } catch (err) {
      setError('Failed to update favorite status.');
    } finally {
      setLoading(false);
    }
  };

  const deleteSong = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete song');
      }
      
      setSongs(songs.filter(song => song.id !== id));
      setSuccess('பாடல் நீக்கப்பட்டது! (Song removed!)');
    } catch (err) {
      setError('Failed to delete song from library.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎵 Tamil Songs Music Library API 🎶</h1>
        <p>தமிழ் இசை தொகுப்பு (Tamil Music Collection)</p>
      </header>
      
      <main>
        {loading && <TamilLoader />}
        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <SongForm onAddSong={addSong} />
        <SongList 
          songs={songs} 
          onToggleFavorite={toggleFavorite}
          onDeleteSong={deleteSong}
        />
        
        <button onClick={fetchSongs} className="refresh-btn">
          🔄 Refresh Music Library
        </button>
      </main>
    </div>
  );
}

export default App;