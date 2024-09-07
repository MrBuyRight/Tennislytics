import React, { useState } from 'react';
import './OddsInput.css'; // Make sure to create this CSS file

function OddsInput({ onOddsSubmit }) {
  const [formData, setFormData] = useState({
    player1: { name: '', tennislyticsOdds: '', bookOdds: '' },
    player2: { name: '', tennislyticsOdds: '', bookOdds: '' }
  });

  const handleInputChange = (player, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [player]: { ...prevData[player], [field]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOddsSubmit(formData);
  };

  return (
    <section className="odds-input">
      <h2>Enter Match Odds</h2>
      <form onSubmit={handleSubmit}>
        {['player1', 'player2'].map((player, index) => (
          <div key={player} className="player-section">
            <h3>Player {index + 1}</h3>
            <div className="input-group">
              <label htmlFor={`${player}-name`}>Name:</label>
              <input
                type="text"
                id={`${player}-name`}
                value={formData[player].name}
                onChange={(e) => handleInputChange(player, 'name', e.target.value)}
                placeholder="Enter player name"
              />
            </div>
            <div className="odds-row">
              <div className="input-group">
                <label htmlFor={`${player}-tennislytics-odds`}>Tennislytics Odds:</label>
                <input
                  type="number"
                  id={`${player}-tennislytics-odds`}
                  value={formData[player].tennislyticsOdds}
                  onChange={(e) => handleInputChange(player, 'tennislyticsOdds', e.target.value)}
                  placeholder="e.g., 60"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              <div className="input-group">
                <label htmlFor={`${player}-book-odds`}>Sportsbook Odds:</label>
                <input
                  type="number"
                  id={`${player}-book-odds`}
                  value={formData[player].bookOdds}
                  onChange={(e) => handleInputChange(player, 'bookOdds', e.target.value)}
                  placeholder="e.g., 55"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">Calculate Odds Difference</button>
      </form>
    </section>
  );
}

export default OddsInput;