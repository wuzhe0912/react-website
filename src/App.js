import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';

const tags = ['中立友善', '邪惡混亂']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NameCard name="Heroku" number={12345} isHuman tags={tags} />
    </div>
  );
}

export default App;
