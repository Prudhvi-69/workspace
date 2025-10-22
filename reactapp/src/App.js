import React, { useState } from 'react';
import AnimeList from './components/AnimeList';
import MobileCounter from './components/MobileCounter';
import AnimeToggle from './components/AnimeToggle';
import './App.css';

function App() {
  const [animeCollection, setAnimeCollection] = useState([
    { id: 1, name: 'Naruto', phone: 'iPhone 14', watched: true },
    { id: 2, name: 'One Piece', phone: 'Samsung Galaxy S23', watched: false },
    { id: 3, name: 'Attack on Titan', phone: 'Google Pixel 7', watched: true }
  ]);

  const [newAnimeName, setNewAnimeName] = useState('');
  const [newPhoneName, setNewPhoneName] = useState('');
  const [showWatchedOnly, setShowWatchedOnly] = useState(false);

  const addAnime = (e) => {
    e.preventDefault();
    if (newAnimeName.trim() && newPhoneName.trim()) {
      const newAnime = {
        id: Date.now(),
        name: newAnimeName.trim(),
        phone: newPhoneName.trim(),
        watched: false
      };
      setAnimeCollection([...animeCollection, newAnime]);
      setNewAnimeName('');
      setNewPhoneName('');
    }
  };

  const toggleWatched = (id) => {
    setAnimeCollection(animeCollection.map(anime =>
      anime.id === id ? { ...anime, watched: !anime.watched } : anime
    ));
  };

  const filteredAnime = showWatchedOnly 
    ? animeCollection.filter(anime => anime.watched)
    : animeCollection;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎌 Anime Mobile Collection Manager 📱</h1>
      </header>
      
      <main>
        <AnimeToggle 
          showWatchedOnly={showWatchedOnly}
          onToggle={() => setShowWatchedOnly(!showWatchedOnly)}
        />

        <form onSubmit={addAnime} className="add-form">
          <input
            type="text"
            placeholder="Anime name..."
            value={newAnimeName}
            onChange={(e) => setNewAnimeName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile phone..."
            value={newPhoneName}
            onChange={(e) => setNewPhoneName(e.target.value)}
          />
          <button type="submit">Add to Collection</button>
        </form>

        <AnimeList 
          animeList={filteredAnime}
          onToggleWatched={toggleWatched}
        />

        <MobileCounter animeCount={animeCollection.length} />
      </main>
    </div>
  );
}

export default App;