import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kodflix</h1>
        </header>
        <Gallery />
      </div>
    );
  }
}

export default App;
