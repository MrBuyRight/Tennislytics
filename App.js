import React from 'react';
import Header from './components/Header';
import OddsCalculator from './components/OddsCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content-wrapper">
        <OddsCalculator />
      </main>
    </div>
  );
}

export default App;
