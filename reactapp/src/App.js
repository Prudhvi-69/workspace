import React, { useState } from 'react';
import ActorList from './components/ActorList';
import ReviewCounter from './components/ReviewCounter';
import RatingToggle from './components/RatingToggle';
import './App.css';

function App() {
  const [actors, setActors] = useState([
    { id: 1, name: 'Masako Nozawa', character: 'Goku', phone: 'iPhone 15 Pro', rating: 5, verified: true },
    { id: 2, name: 'Mayumi Tanaka', character: 'Luffy', phone: 'Samsung Galaxy S24', rating: 3, verified: false },
    { id: 3, name: 'Noriaki Sugiyama', character: 'Sasuke', phone: 'Google Pixel 8', rating: 4, verified: true }
  ]);

  const [newActor, setNewActor] = useState('');
  const [newCharacter, setNewCharacter] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newRating, setNewRating] = useState('');
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const addActor = (e) => {
    e.preventDefault();
    if (newActor.trim() && newCharacter.trim() && newPhone.trim() && newRating.trim()) {
      const actor = {
        id: Date.now(),
        name: newActor.trim(),
        character: newCharacter.trim(),
        phone: newPhone.trim(),
        rating: parseInt(newRating),
        verified: false
      };
      setActors([...actors, actor]);
      setNewActor('');
      setNewCharacter('');
      setNewPhone('');
      setNewRating('');
    }
  };

  const toggleVerified = (id) => {
    setActors(actors.map(actor =>
      actor.id === id ? { ...actor, verified: !actor.verified } : actor
    ));
  };

  const filteredActors = showVerifiedOnly 
    ? actors.filter(actor => actor.verified)
    : actors;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎤 Anime Voice Actor Phone Review Tracker 📱</h1>
      </header>
      
      <main>
        <RatingToggle 
          showVerifiedOnly={showVerifiedOnly}
          onToggle={() => setShowVerifiedOnly(!showVerifiedOnly)}
        />

        <form onSubmit={addActor} className="add-form">
          <input
            type="text"
            placeholder="Voice actor name..."
            value={newActor}
            onChange={(e) => setNewActor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Character voiced..."
            value={newCharacter}
            onChange={(e) => setNewCharacter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone model..."
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rating (1-5)..."
            min="1"
            max="5"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
          <button type="submit">Add Review</button>
        </form>

        <ActorList 
          actorList={filteredActors}
          onToggleVerified={toggleVerified}
        />

        <ReviewCounter actorCount={actors.length} />
      </main>
    </div>
  );
}

export default App;