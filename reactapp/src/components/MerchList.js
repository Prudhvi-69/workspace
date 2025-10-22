import React from 'react';

const MerchList = ({ merchList, onToggleStock }) => {
  return (
    <div className="merch-list">
      <h2>🛍️ Merchandise Inventory ({merchList.length})</h2>
      {merchList.length === 0 ? (
        <div className="no-merchandise">No merchandise found in stores 🏪</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {merchList.map(merch => (
            <li key={merch.id} className={`merch-item ${merch.inStock ? 'in-stock' : ''}`}>
              <div className="merch-info">
                <div className="item-name">{merch.item}</div>
                <div className="anime-series">🎌 {merch.anime}</div>
                <div className="store-info">🏪 {merch.store}</div>
                <div className="price-tag">💰 ${merch.price}</div>
              </div>
              <button
                className={`stock-button ${merch.inStock ? 'in-stock' : 'out-of-stock'}`}
                onClick={() => onToggleStock(merch.id)}
              >
                {merch.inStock ? '✅ In Stock' : '❌ Out of Stock'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MerchList;