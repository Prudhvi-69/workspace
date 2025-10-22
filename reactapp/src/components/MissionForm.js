import React, { useState } from 'react';

const MissionForm = ({ onAddHero }) => {
  const [formData, setFormData] = useState({
    name: '',
    realName: '',
    mission: '',
    power: '',
    team: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.realName.trim() && formData.mission.trim() && formData.power.trim() && formData.team.trim()) {
      onAddHero({
        name: formData.name,
        realName: formData.realName,
        mission: formData.mission,
        power: parseInt(formData.power),
        team: formData.team
      });
      setFormData({ name: '', realName: '', mission: '', power: '', team: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mission-form">
      <h3>🛡️ Register New Hero with S.H.I.E.L.D.</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Hero name (e.g., Iron Man)..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="realName"
            placeholder="Real name (e.g., Tony Stark)..."
            value={formData.realName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mission"
            placeholder="Mission (e.g., Protect New York)..."
            value={formData.mission}
            onChange={handleChange}
          />
          <input
            type="number"
            name="power"
            placeholder="Power level (1-100)..."
            min="1"
            max="100"
            value={formData.power}
            onChange={handleChange}
          />
          <select
            name="team"
            value={formData.team}
            onChange={handleChange}
          >
            <option value="">Select Team...</option>
            <option value="Avengers">Avengers</option>
            <option value="X-Men">X-Men</option>
            <option value="Fantastic Four">Fantastic Four</option>
            <option value="Guardians of the Galaxy">Guardians of the Galaxy</option>
            <option value="S.H.I.E.L.D.">S.H.I.E.L.D.</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          🦸 Register Hero
        </button>
      </form>
    </div>
  );
};

export default MissionForm;