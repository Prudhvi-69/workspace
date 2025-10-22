import React, { useState } from 'react';
import MerchList from './components/MerchList';
import StoreCounter from './components/StoreCounter';
import StockToggle from './components/StockToggle';
import './App.css';

function App() {
  const [merchandise, setMerchandise] = useState([
    { id: 1, item: 'Naruto Phone Case', anime: 'Naruto', store: 'Mobile Plaza', price: 25, inStock: true },
    { id: 2, item: 'One Piece Charger', anime: 'One Piece', store: 'Phone World', price: 15, inStock: false },
    { id: 3, item: 'Attack on Titan Earbuds', anime: 'Attack on Titan', store: 'Tech Anime', price: 45, inStock: true }
  ]);

  const [newItem, setNewItem] = useState('');
  const [newAnime, setNewAnime] = useState('');
  const [newStore, setNewStore] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const addMerchandise = (e) => {
    e.preventDefault();
    if (newItem.trim() && newAnime.trim() && newStore.trim() && newPrice.trim()) {
      const merch = {
        id: Date.now(),
        item: newItem.trim(),
        anime: newAnime.trim(),
        store: newStore.trim(),
        price: parseFloat(newPrice),
        inStock: false
      };
      setMerchandise([...merchandise, merch]);
      setNewItem('');
      setNewAnime('');
      setNewStore('');
      setNewPrice('');
    }
  };

  const toggleStock = (id) => {
    setMerchandise(merchandise.map(merch =>
      merch.id === id ? { ...merch, inStock: !merch.inStock } : merch
    ));
  };

  const filteredMerchandise = showInStockOnly 
    ? merchandise.filter(merch => merch.inStock)
    : merchandise;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛍️ Anime Merchandise Mobile Store Tracker 📱</h1>
      </header>
      
      <main>
        <StockToggle 
          showInStockOnly={showInStockOnly}
          onToggle={() => setShowInStockOnly(!showInStockOnly)}
        />

        <form onSubmit={addMerchandise} className="add-form">
          <input
            type="text"
            placeholder="Merchandise item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <input
            type="text"
            placeholder="Anime series..."
            value={newAnime}
            onChange={(e) => setNewAnime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile store..."
            value={newStore}
            onChange={(e) => setNewStore(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price ($)..."
            min="0"
            step="0.01"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button type="submit">Add Merchandise</button>
        </form>

        <MerchList 
          merchList={filteredMerchandise}
          onToggleStock={toggleStock}
        />

        <StoreCounter merchCount={merchandise.length} />
      </main>
    </div>
  );
}

export default App;