import React, { Component } from 'react';
import './App.css';
import OpenModalWindow from './OpenModalWindow';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Тестовое задание</h1>
        </header>
          <OpenModalWindow />
      </div>
    );
  }
}

export default App;
