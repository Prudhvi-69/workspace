import React from 'react';

const FoodList = ({ foods }) => {
  return (
    <div className="food-list">
      <h2>🍽️ Cantina Menu ({foods.length} items)</h2>
      {foods.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '24px', color: '#bdc3c7' }}>
          No cantina dishes available. The Rebels may have raided our supplies! 🚀
        </div>
      ) : (
        <div className="food-grid">
          {foods.map(food => (
            <div key={food.id} className={`food-item ${food.available ? 'available' : ''}`}>
              <div className="food-name">{food.name}</div>
              <div className="food-planet">🪐 From: {food.planet}</div>
              <div className="food-price">💰 {food.price} Credits</div>
              <div className={`availability-status ${food.available ? 'available-status' : 'unavailable-status'}`}>
                {food.available ? '✅ Available' : '❌ Out of Stock'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodList;