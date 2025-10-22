import React from 'react';

const RestaurantList = ({ restaurants }) => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="restaurant-list">
      <h2>🍽️ Matrix Restaurant Network ({restaurants.length} nodes)</h2>
      {restaurants.length === 0 ? (
        <div style={{ padding: '60px', fontSize: '20px', color: '#006600' }}>
          No restaurants found in the Matrix. The system may be rebooting... 🔄
        </div>
      ) : (
        <div className="restaurant-grid">
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className={`restaurant-item ${restaurant.online ? 'online' : 'offline'}`}>
              <div className="restaurant-name">{restaurant.name}</div>
              <div className="restaurant-location">📍 {restaurant.location}</div>
              <div className="restaurant-specialty">🍴 {restaurant.specialty}</div>
              <div className="restaurant-rating">⭐ {renderStars(restaurant.rating)} ({restaurant.rating}/5)</div>
              <div className={`status-indicator ${restaurant.online ? 'online-status' : 'offline-status'}`}>
                {restaurant.online ? '🟢 ONLINE' : '🔴 OFFLINE'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;