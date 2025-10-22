import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import SpecsCounter from './components/SpecsCounter';
import BrandToggle from './components/BrandToggle';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Goku', anime: 'Dragon Ball', brand: 'Samsung', specs: '256GB, 12GB RAM', premium: true },
    { id: 2, name: 'Luffy', anime: 'One Piece', brand: 'Apple', specs: '128GB, 8GB RAM', premium: false },
    { id: 3, name: 'Ichigo', anime: 'Bleach', brand: 'Google', specs: '512GB, 16GB RAM', premium: true }
  ]);

  const [newCharacter, setNewCharacter] = useState('');
  const [newAnime, setNewAnime] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newSpecs, setNewSpecs] = useState('');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const addCharacter = (e) => {
    e.preventDefault();
    if (newCharacter.trim() && newAnime.trim() && newBrand.trim() && newSpecs.trim()) {
      const character = {
        id: Date.now(),
        name: newCharacter.trim(),
        anime: newAnime.trim(),
        brand: newBrand.trim(),
        specs: newSpecs.trim(),
        premium: false
      };
      setCharacters([...characters, character]);
      setNewCharacter('');
      setNewAnime('');
      setNewBrand('');
      setNewSpecs('');
    }
  };

  const togglePremium = (id) => {
    setCharacters(characters.map(char =>
      char.id === id ? { ...char, premium: !char.premium } : char
    ));
  };

  const filteredCharacters = showPremiumOnly 
    ? characters.filter(char => char.premium)
    : characters;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎭 Anime Character Phone Specs Tracker 📱</h1>
      </header>
      
      <main>
        <BrandToggle 
          showPremiumOnly={showPremiumOnly}
          onToggle={() => setShowPremiumOnly(!showPremiumOnly)}
        />

        <form onSubmit={addCharacter} className="add-form">
          <input
            type="text"
            placeholder="Character name..."
            value={newCharacter}
            onChange={(e) => setNewCharacter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Anime series..."
            value={newAnime}
            onChange={(e) => setNewAnime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone brand..."
            value={newBrand}
            onChange={(e) => setNewBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone specs..."
            value={newSpecs}
            onChange={(e) => setNewSpecs(e.target.value)}
          />
          <button type="submit">Add Character</button>
        </form>

        <CharacterList 
          characterList={filteredCharacters}
          onTogglePremium={togglePremium}
        />

        <SpecsCounter characterCount={characters.length} />
      </main>
    </div>
  );
}

export default App;