import React, { useState } from 'react';
import StudioList from './components/StudioList';
import GameCounter from './components/GameCounter';
import PlatformToggle from './components/PlatformToggle';
import './App.css';

function App() {
  const [studios, setStudios] = useState([
    { id: 1, name: 'Studio Ghibli', game: 'Spirited Away Mobile', platform: 'iOS', released: true },
    { id: 2, name: 'Toei Animation', game: 'Dragon Ball Legends', platform: 'Android', released: false },
    { id: 3, name: 'Madhouse', game: 'One Punch Man Fighter', platform: 'iOS', released: true }
  ]);

  const [newStudio, setNewStudio] = useState('');
  const [newGame, setNewGame] = useState('');
  const [newPlatform, setNewPlatform] = useState('');
  const [showReleasedOnly, setShowReleasedOnly] = useState(false);

  const addStudio = (e) => {
    e.preventDefault();
    if (newStudio.trim() && newGame.trim() && newPlatform.trim()) {
      const studio = {
        id: Date.now(),
        name: newStudio.trim(),
        game: newGame.trim(),
        platform: newPlatform.trim(),
        released: false
      };
      setStudios([...studios, studio]);
      setNewStudio('');
      setNewGame('');
      setNewPlatform('');
    }
  };

  const toggleRelease = (id) => {
    setStudios(studios.map(studio =>
      studio.id === id ? { ...studio, released: !studio.released } : studio
    ));
  };

  const filteredStudios = showReleasedOnly 
    ? studios.filter(studio => studio.released)
    : studios;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Anime Studio Mobile Game Tracker 🎮</h1>
      </header>
      
      <main>
        <PlatformToggle 
          showReleasedOnly={showReleasedOnly}
          onToggle={() => setShowReleasedOnly(!showReleasedOnly)}
        />

        <form onSubmit={addStudio} className="add-form">
          <input
            type="text"
            placeholder="Studio name..."
            value={newStudio}
            onChange={(e) => setNewStudio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile game..."
            value={newGame}
            onChange={(e) => setNewGame(e.target.value)}
          />
          <input
            type="text"
            placeholder="Platform (iOS/Android)..."
            value={newPlatform}
            onChange={(e) => setNewPlatform(e.target.value)}
          />
          <button type="submit">Add Studio Game</button>
        </form>

        <StudioList 
          studioList={filteredStudios}
          onToggleRelease={toggleRelease}
        />

        <GameCounter studioCount={studios.length} />
      </main>
    </div>
  );
}

export default App;