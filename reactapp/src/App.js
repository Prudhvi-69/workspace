import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodList from './components/FoodList';
import OrderForm from './components/OrderForm';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const starWarsFoods = response.data.slice(0, 6).map(post => ({
        id: post.id,
        name: `${post.title.split(' ')[0]} Cantina Special`,
        planet: post.title.split(' ')[1] || 'Tatooine',
        price: Math.floor(Math.random() * 50) + 10,
        available: Math.random() > 0.3
      }));
      setFoods(starWarsFoods);
    } catch (err) {
      setError('Failed to fetch Star Wars cantina menu. The Empire may be interfering.');
    } finally {
      setLoading(false);
    }
  };

  const addFood = async (newFood) => {
    setLoading(true);
    setError(null);
    setSuccess('');
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newFood.name,
        body: `Delicious food from ${newFood.planet}`,
        userId: 1
      });
      
      const foodItem = {
        id: response.data.id,
        name: newFood.name,
        planet: newFood.planet,
        price: newFood.price,
        available: true
      };
      
      setFoods([...foods, foodItem]);
      setSuccess('New cantina dish added successfully!');
    } catch (err) {
      setError('Failed to add food item. The Death Star may be blocking transmissions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 Star Wars Cantina Food Delivery API 🍽️</h1>
      </header>
      
      <main>
        {loading && <LoadingSpinner />}
        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <OrderForm onAddFood={addFood} />
        <FoodList foods={foods} />
        
        <button onClick={fetchFoods} className="refresh-btn">
          🔄 Refresh Cantina Menu
        </button>
      </main>
    </div>
  );
}

export default App;