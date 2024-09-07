import React, { useState } from 'react';
import './OddsCalculator.css';

function OddsCalculator() {
  const [odds, setOdds] = useState({
    player1: { name: '', tennislyticsOdds: '', bookOdds: '' },
    player2: { name: '', tennislyticsOdds: '', bookOdds: '' }
  });

  const handleInputChange = (player, field, value) => {
    // Ensure the input is a valid percentage
    if (field === 'tennislyticsOdds' || field === 'bookOdds') {
      value = Math.min(Math.max(value, 0), 100);
    }
    setOdds(prevOdds => ({
      ...prevOdds,
      [player]: { ...prevOdds[player], [field]: value }
    }));
  };

  const calculateDifference = (tennislyticsOdds, bookOdds) => {
    return tennislyticsOdds && bookOdds ? (parseFloat(tennislyticsOdds) - parseFloat(bookOdds)).toFixed(2) : '';
  };

  return (
    <div className="odds-calculator">
      <section className="odds-input">
        <h2>Enter Match Odds</h2>
        <div className="players-container">
          {['player1', 'player2'].map((player, index) => (
            <div key={player} className="player-section">
              <h3>Player {index + 1}</h3>
              <div className="input-group">
                <label htmlFor={`${player}-name`}>Name:</label>
                <input
                  type="text"
                  id={`${player}-name`}
                  value={odds[player].name}
                  onChange={(e) => handleInputChange(player, 'name', e.target.value)}
                  placeholder="Enter player name"
                />
              </div>
              <div className="odds-inputs">
                <div className="input-group">
                  <label htmlFor={`${player}-tennislytics-odds`}>Tennislytics:</label>
                  <div className="percentage-input">
                    <input
                      type="number"
                      id={`${player}-tennislytics-odds`}
                      value={odds[player].tennislyticsOdds}
                      onChange={(e) => handleInputChange(player, 'tennislyticsOdds', e.target.value)}
                      placeholder="e.g., 60"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <span className="percentage-symbol">%</span>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor={`${player}-book-odds`}>Sportsbook:</label>
                  <div className="percentage-input">
                    <input
                      type="number"
                      id={`${player}-book-odds`}
                      value={odds[player].bookOdds}
                      onChange={(e) => handleInputChange(player, 'bookOdds', e.target.value)}
                      placeholder="e.g., 55"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <span className="percentage-symbol">%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="comparison-display">
        <h2>Odds Comparison</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Tennislytics</th>
                <th>Sportsbook</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
              {['player1', 'player2'].map((player) => (
                <tr key={player}>
                  <td>{odds[player].name || `Player ${player === 'player1' ? '1' : '2'}`}</td>
                  <td>{odds[player].tennislyticsOdds}%</td>
                  <td>{odds[player].bookOdds}%</td>
                  <td>{calculateDifference(odds[player].tennislyticsOdds, odds[player].bookOdds)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default OddsCalculator;
