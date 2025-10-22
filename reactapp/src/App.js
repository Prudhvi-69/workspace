import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import MissionForm from './components/MissionForm';
import MarvelLoader from './components/MarvelLoader';
import './App.css';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch heroes');
      }
      
      const data = await response.json();
      const marvelHeroes = data.slice(0, 5).map(user => ({
        id: user.id,
        name: `${user.name.split(' ')[0]} Hero`,
        realName: user.name,
        mission: `Protect ${user.address.city}`,
        power: Math.floor(Math.random() * 100) + 1,
        status: Math.random() > 0.3 ? 'Active' : 'Inactive',
        team: user.company.name
      }));
      
      setHeroes(marvelHeroes);
    } catch (err) {
      setError('Failed to connect to S.H.I.E.L.D. database. Hydra interference detected!');
    } finally {
      setLoading(false);
    }
  };

  const addHero = async (newHero) => {
    setLoading(true);
    setError(null);
    setSuccess('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newHero.realName,
          address: { city: newHero.mission.split(' ')[1] || 'New York' },
          company: { name: newHero.team }
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to register hero');
      }
      
      const result = await response.json();
      
      const hero = {
        id: result.id || Date.now(),
        name: newHero.name,
        realName: newHero.realName,
        mission: newHero.mission,
        power: newHero.power,
        status: 'Active',
        team: newHero.team
      };
      
      setHeroes([...heroes, hero]);
      setSuccess('New hero successfully registered with S.H.I.E.L.D.!');
    } catch (err) {
      setError('Failed to register hero. Nick Fury is investigating the issue.');
    } finally {
      setLoading(false);
    }
  };

  const updateHeroStatus = async (id, newStatus) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update hero status');
      }
      
      setHeroes(heroes.map(hero =>
        hero.id === id ? { ...hero, status: newStatus } : hero
      ));
      setSuccess(`Hero status updated to ${newStatus}!`);
    } catch (err) {
      setError('Failed to update hero status. Communication with S.H.I.E.L.D. lost.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🦸 Marvel Heroes Mission API Tracker ⚡</h1>
        <p>S.H.I.E.L.D. Hero Management System</p>
      </header>
      
      <main>
        {loading && <MarvelLoader />}
        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <MissionForm onAddHero={addHero} />
        <HeroList heroes={heroes} onUpdateStatus={updateHeroStatus} />
        
        <button onClick={fetchHeroes} className="refresh-btn">
          🔄 Refresh S.H.I.E.L.D. Database
        </button>
      </main>
    </div>
  );
}

export default App;