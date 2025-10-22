import React, { useState } from 'react';

const VillainForm = ({ onAddVillain }) => {
  const [formData, setFormData] = useState({
    name: '',
    realName: '',
    city: '',
    threat: 1,
    scheme: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.realName.trim() && formData.city.trim() && formData.scheme.trim()) {
      onAddVillain({
        name: formData.name,
        realName: formData.realName,
        city: formData.city,
        threat: parseInt(formData.threat),
        scheme: formData.scheme
      });
      setFormData({ name: '', realName: '', city: '', threat: 1, scheme: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="villain-form">
      <h3>💀 Register New Villain in Arkham</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Villain name (e.g., The Joker)..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="realName"
            placeholder="Real name (e.g., Jack Napier)..."
            value={formData.realName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Operating city (e.g., Gotham)..."
            value={formData.city}
            onChange={handleChange}
          />
          <select
            name="threat"
            value={formData.threat}
            onChange={handleChange}
          >
            <option value={1}>Low Threat</option>
            <option value={2}>Medium Threat</option>
            <option value={3}>High Threat</option>
            <option value={4}>Extreme Threat</option>
            <option value={5}>Apocalyptic Threat</option>
          </select>
          <textarea
            name="scheme"
            placeholder="Criminal scheme description..."
            value={formData.scheme}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          🦹 Add to Database
        </button>
      </form>
    </div>
  );
};

export default VillainForm;