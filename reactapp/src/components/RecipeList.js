import React from 'react';

const RecipeList = ({ recipes, onDeleteRecipe }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getDifficultyText = (difficulty) => {
    const levels = ['Easy', 'Medium', 'Hard'];
    return levels[difficulty - 1] || 'Easy';
  };

  return (
    <div className="recipe-list">
      <h2>📚 Recipe Cookbook ({recipes.length} recipes)</h2>
      {recipes.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '20px', color: '#8d6e63' }}>
          No recipes in the cookbook yet. Start cooking! 👨‍🍳
        </div>
      ) : (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className={`recipe-item ${recipe.available ? 'available' : 'unavailable'}`}>
              <button 
                className="delete-btn"
                onClick={() => onDeleteRecipe(recipe.id)}
              >
                🗑️ Delete
              </button>
              
              <div className="recipe-name">{recipe.name}</div>
              <div className="recipe-cuisine">🌍 {recipe.cuisine} Cuisine</div>
              
              <div className="recipe-details">
                <span>⏱️ {recipe.cookTime} mins</span>
                <span>📊 {getDifficultyText(recipe.difficulty)}</span>
              </div>
              
              <div className="recipe-rating">{renderStars(recipe.rating)} ({recipe.rating}/5)</div>
              
              <div className={`availability-badge ${recipe.available ? 'available-badge' : 'unavailable-badge'}`}>
                {recipe.available ? '✅ Available' : '❌ Out of Season'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;