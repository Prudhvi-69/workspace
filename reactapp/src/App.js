import React, { useState, useEffect } from 'react';
import RestaurantList from './components/RestaurantList';
import OrderForm from './components/OrderForm';
import MatrixLoader from './components/MatrixLoader';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const matrixRestaurants = data.slice(0, 5).map(user => ({
        id: user.id,
        name: `${user.name} Digital Diner`,
        location: `Level ${user.id} - ${user.address.city}`,
        specialty: `${user.company.name} Special`,
        rating: Math.floor(Math.random() * 5) + 1,
        online: Math.random() > 0.2
      }));
      
      setRestaurants(matrixRestaurants);
    } catch (err) {
      setError('Connection to the Matrix failed. Agent Smith may be interfering.');
    } finally {
      setLoading(false);
    }
  };

  const addRestaurant = async (newRestaurant) => {
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
          name: newRestaurant.name,
          address: { city: newRestaurant.location },
          company: { name: newRestaurant.specialty }
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create restaurant');
      }
      
      const result = await response.json();
      
      const restaurant = {
        id: result.id || Date.now(),
        name: newRestaurant.name,
        location: newRestaurant.location,
        specialty: newRestaurant.specialty,
        rating: 5,
        online: true
      };
      
      setRestaurants([...restaurants, restaurant]);
      setSuccess('New restaurant successfully jacked into the Matrix!');
    } catch (err) {
      setError('Failed to upload restaurant data. The Matrix rejected the connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔴 Matrix Code Restaurant Network 🍽️</h1>
        <p>Welcome to the digital dining experience</p>
      </header>
      
      <main>
        {loading && <MatrixLoader />}
        {error && <div className="error-message">⚠️ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <OrderForm onAddRestaurant={addRestaurant} />
        <RestaurantList restaurants={restaurants} />
        
        <button onClick={fetchRestaurants} className="refresh-btn">
          🔄 Reload Matrix Database
        </button>
      </main>
    </div>
  );
}

export default App;