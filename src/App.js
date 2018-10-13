import React, { Component } from 'react';
import './App.css';
import Chess from './chess/Chess';

class App extends Component {
  render() {
    return (
      <div className="chess-board">
        <Chess />
      </div>
    );
  }
}

export default App;
