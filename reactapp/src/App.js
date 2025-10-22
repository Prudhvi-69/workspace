import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VillainList from './components/VillainList';
import VillainForm from './components/VillainForm';
import DCLoader from './components/DCLoader';
import './App.css';

function App() {
  const [villains, setVillains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchVillains();
  }, []);

  const fetchVillains = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const dcVillains = response.data.slice(0, 6).map(comment => ({
        id: comment.id,
        name: `${comment.name.split(' ')[0]} Villain`,
        realName: comment.name,
        city: comment.email.split('@')[0].toUpperCase(),
        threat: Math.floor(Math.random() * 5) + 1,
        captured: Math.random() > 0.4,
        scheme: comment.body.substring(0, 50) + '...'
      }));
      setVillains(dcVillains);
    } catch (err) {
      setError('Failed to access Arkham Asylum database. Joker may have hacked the system!');
    } finally {
      setLoading(false);
    }
  };

  const addVillain = async (newVillain) => {
    setLoading(true);
    setError(null);
    setSuccess('');
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        name: newVillain.realName,
        email: `${newVillain.city.toLowerCase()}@gotham.dc`,
        body: newVillain.scheme
      });
      
      const villain = {
        id: response.data.id,
        name: newVillain.name,
        realName: newVillain.realName,
        city: newVillain.city,
        threat: newVillain.threat,
        captured: false,
        scheme: newVillain.scheme
      };
      
      setVillains([...villains, villain]);
      setSuccess('New villain added to Arkham database!');
    } catch (err) {
      setError('Failed to register villain. Batman may be interfering with communications.');
    } finally {
      setLoading(false);
    }
  };

  const updateVillainStatus = async (id, captured) => {
    setLoading(true);
    setError(null);
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        captured: captured
      });
      
      setVillains(villains.map(villain =>
        villain.id === id ? { ...villain, captured } : villain
      ));
      setSuccess(`Villain ${captured ? 'captured' : 'escaped'}!`);
    } catch (err) {
      setError('Failed to update villain status. Security breach detected!');
    } finally {
      setLoading(false);
    }
  };

  const deleteVillain = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
      setVillains(villains.filter(villain => villain.id !== id));
      setSuccess('Villain eliminated from database!');
    } catch (err) {
      setError('Failed to eliminate villain record. Database is corrupted!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🦹 DC Comics Villain Database API 💀</h1>
        <p>Arkham Asylum Criminal Management System</p>
      </header>
      
      <main>
        {loading && <DCLoader />}
        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <VillainForm onAddVillain={addVillain} />
        <VillainList 
          villains={villains} 
          onUpdateStatus={updateVillainStatus}
          onDeleteVillain={deleteVillain}
        />
        
        <button onClick={fetchVillains} className="refresh-btn">
          🔄 Refresh Arkham Database
        </button>
      </main>
    </div>
  );
}

export default App;