// WDGTR
// NCWH
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Cartographer } from './app/components/Cartographer';
import { Goblin } from './app/components/Npcs/Goblin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cartographer />
        < Goblin />
        <Counter />
      </header>
    </div>
  );
}

export default App;
