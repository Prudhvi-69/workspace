import React, { useState } from 'react';
import ConventionList from './components/ConventionList';
import AppCounter from './components/AppCounter';
import EventToggle from './components/EventToggle';
import './App.css';

function App() {
  const [conventions, setConventions] = useState([
    { id: 1, name: 'Anime Expo', location: 'Los Angeles', app: 'AX Mobile Guide', downloads: 15000, featured: true },
    { id: 2, name: 'Comic-Con', location: 'San Diego', app: 'Con Mobile Hub', downloads: 8500, featured: false },
    { id: 3, name: 'Otakon', location: 'Washington DC', app: 'Otakon Connect', downloads: 12000, featured: true }
  ]);

  const [newConvention, setNewConvention] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newApp, setNewApp] = useState('');
  const [newDownloads, setNewDownloads] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const addConvention = (e) => {
    e.preventDefault();
    if (newConvention.trim() && newLocation.trim() && newApp.trim() && newDownloads.trim()) {
      const convention = {
        id: Date.now(),
        name: newConvention.trim(),
        location: newLocation.trim(),
        app: newApp.trim(),
        downloads: parseInt(newDownloads),
        featured: false
      };
      setConventions([...conventions, convention]);
      setNewConvention('');
      setNewLocation('');
      setNewApp('');
      setNewDownloads('');
    }
  };

  const toggleFeatured = (id) => {
    setConventions(conventions.map(conv =>
      conv.id === id ? { ...conv, featured: !conv.featured } : conv
    ));
  };

  const filteredConventions = showFeaturedOnly 
    ? conventions.filter(conv => conv.featured)
    : conventions;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎪 Anime Convention Mobile App Showcase Tracker 📱</h1>
      </header>
      
      <main>
        <EventToggle 
          showFeaturedOnly={showFeaturedOnly}
          onToggle={() => setShowFeaturedOnly(!showFeaturedOnly)}
        />

        <form onSubmit={addConvention} className="add-form">
          <input
            type="text"
            placeholder="Convention name..."
            value={newConvention}
            onChange={(e) => setNewConvention(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location..."
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile app name..."
            value={newApp}
            onChange={(e) => setNewApp(e.target.value)}
          />
          <input
            type="number"
            placeholder="Downloads count..."
            min="0"
            value={newDownloads}
            onChange={(e) => setNewDownloads(e.target.value)}
          />
          <button type="submit">Add Convention</button>
        </form>

        <ConventionList 
          conventionList={filteredConventions}
          onToggleFeatured={toggleFeatured}
        />

        <AppCounter conventionCount={conventions.length} />
      </main>
    </div>
  );
}

export default App;