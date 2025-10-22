import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    difficulty: 1,
    cookTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.cuisine.trim() && formData.cookTime.trim()) {
      onAddRecipe({
        name: formData.name,
        cuisine: formData.cuisine,
        difficulty: parseInt(formData.difficulty),
        cookTime: parseInt(formData.cookTime)
      });
      setFormData({ name: '', cuisine: '', difficulty: 1, cookTime: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="recipe-form">
      <h3>👨🍳 Add New Recipe to Cookbook</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Recipe name (e.g., Chocolate Cake)..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine type (e.g., Italian)..."
            value={formData.cuisine}
            onChange={handleChange}
          />
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value={1}>Easy</option>
            <option value={2}>Medium</option>
            <option value={3}>Hard</option>
          </select>
          <input
            type="number"
            name="cookTime"
            placeholder="Cooking time (minutes)..."
            min="1"
            value={formData.cookTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          📖 Add to Cookbook
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;