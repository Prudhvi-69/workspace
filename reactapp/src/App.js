import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import CookingLoader from './components/CookingLoader';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const foodRecipes = response.data.slice(0, 6).map(post => ({
        id: post.id,
        name: `${post.title.split(' ')[0]} Deluxe Recipe`,
        cuisine: post.title.split(' ')[1] || 'International',
        difficulty: Math.floor(Math.random() * 3) + 1,
        cookTime: Math.floor(Math.random() * 60) + 15,
        rating: Math.floor(Math.random() * 5) + 1,
        available: Math.random() > 0.2
      }));
      setRecipes(foodRecipes);
    } catch (err) {
      setError('Failed to fetch recipes from the kitchen database. Chef may be busy!');
    } finally {
      setLoading(false);
    }
  };

  const addRecipe = async (newRecipe) => {
    setLoading(true);
    setError(null);
    setSuccess('');
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newRecipe.name,
        body: `Delicious ${newRecipe.cuisine} recipe with ${newRecipe.difficulty} difficulty`,
        userId: 1
      });
      
      const recipe = {
        id: response.data.id,
        name: newRecipe.name,
        cuisine: newRecipe.cuisine,
        difficulty: newRecipe.difficulty,
        cookTime: newRecipe.cookTime,
        rating: 5,
        available: true
      };
      
      setRecipes([...recipes, recipe]);
      setSuccess('New recipe added to the cookbook successfully!');
    } catch (err) {
      setError('Failed to save recipe. The kitchen server might be overloaded.');
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      setSuccess('Recipe removed from cookbook!');
    } catch (err) {
      setError('Failed to delete recipe. Kitchen database error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>👨‍🍳 Gourmet Food Recipe API Manager 🍽️</h1>
        <p>Your digital cookbook with API integration</p>
      </header>
      
      <main>
        {loading && <CookingLoader />}
        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}
        
        <RecipeForm onAddRecipe={addRecipe} />
        <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} />
        
        <button onClick={fetchRecipes} className="refresh-btn">
          🔄 Refresh Recipe Database
        </button>
      </main>
    </div>
  );
}

export default App;