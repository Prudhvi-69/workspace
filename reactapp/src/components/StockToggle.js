import React from 'react';

const StockToggle = ({ showInStockOnly, onToggle }) => {
  return (
    <div className="toggle-section">
      <h3>🔍 Filter Merchandise</h3>
      <label>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={onToggle}
        />
        {showInStockOnly ? ' ✅ Showing in-stock items only' : ' 📋 Showing all merchandise'}
      </label>
      <p>
        {showInStockOnly 
          ? 'Toggle off to see complete merchandise catalog' 
          : 'Toggle on to see only available items in mobile stores'}
      </p>
    </div>
  );
};

export default StockToggle;