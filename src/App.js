import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import samuraiCover from './images/samurai_cover.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>
        <p className="Poster">
        <img src={samuraiCover} className="main-poster"/>
        </p>
      </div>
    );
  }
}

export default App;
