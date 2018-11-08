import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tom from './bla/ido/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Wait <code>src/Time.no-time</code> and no wait.
          </p>
        </header>
        <p></p>
        <Tom/>
      </div>
    );
  }
}

export default App;
