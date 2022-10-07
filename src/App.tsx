import React from 'react';
import './App.scss';
import WorldBank from './components/WorldBank/WorldBank';

function App() {
  return (
    <div className="DevexApp">
      <header className="DevexApp-header pt-3 pb-2">
        <h1 className="fs-3">Welcome to Devex hiring challenge</h1>
      </header>
      <WorldBank />
    </div>
  );
}

export default App;
