import React from 'react';

function ComparisonDisplay({ odds, calculateDifference }) {
  return (
    <section className="comparison-display">
      <h2>Odds Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Tennislytics Odds</th>
            <th>Sportsbook Odds</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {['player1', 'player2'].map((player) => (
            <tr key={player}>
              <td>{odds[player].name || `Player ${player === 'player1' ? '1' : '2'}`}</td>
              <td>{odds[player].yourOdds}</td>
              <td>{odds[player].bookOdds}</td>
              <td>{calculateDifference(odds[player].yourOdds, odds[player].bookOdds)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ComparisonDisplay;
