import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans } from 'react-i18next';

function App() {

  const name = "World"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Trans>Hello, <strong>{{ name }}</strong>!</Trans>
      </header>
    </div>
  );
}

export default App;
