import React, { useState } from 'react';

const OrderForm = ({ onAddRestaurant }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    specialty: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.location.trim() && formData.specialty.trim()) {
      onAddRestaurant({
        name: formData.name,
        location: formData.location,
        specialty: formData.specialty
      });
      setFormData({ name: '', location: '', specialty: '' });
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
      <h3>🔌 Jack Into New Restaurant</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Restaurant name (e.g., Neo's Noodles)..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Matrix location (e.g., Level 7 - Zion)..."
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialty"
            placeholder="Digital specialty (e.g., Red Pill Ramen)..."
            value={formData.specialty}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          🔴 Upload to Matrix
        </button>
      </form>
    </div>
  );
};

export default OrderForm;