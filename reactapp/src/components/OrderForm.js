import React, { useState } from 'react';

const OrderForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: '',
    planet: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.planet.trim() && formData.price.trim()) {
      onAddFood({
        name: formData.name,
        planet: formData.planet,
        price: parseInt(formData.price)
      });
      setFormData({ name: '', planet: '', price: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="order-form">
      <h3>🍴 Add New Cantina Dish</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Dish name (e.g., Bantha Burger)..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="planet"
            placeholder="Origin planet (e.g., Tatooine)..."
            value={formData.planet}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price in credits..."
            min="1"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          🚀 Add to Cantina Menu
        </button>
      </form>
    </div>
  );
};

export default OrderForm;