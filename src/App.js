import React, { Component } from 'react';
import './App.css';
import samuraiCover from './images/samurai_cover.jpg';
import basketsCover from './images/baskets-poster.jpg';
import twinPeaksCover from './images/twin-peaks.jpg';
import gameOfThronesCover from './images/gameOfThrones-poster.jpg';
import topOfTheLakeCover from './images/top-of-the-lake-poster.jpg';
import winterSunCover from './images/winter-sun-poster.jpg';
import youngPopeCover from './images/young-pope-cover.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>
        {/* <p className="Poster">
        <img src={samuraiCover} className="main-poster" alt=" "/>
        </p> */}
        <div className="Titles">
          <div className="flex-container1">
            <h1 className="flex-item">
              <img src={basketsCover} alt=" "/>
            </h1>
            <h1 className="flex-item">
              <img src={twinPeaksCover} alt=" "/>
            </h1>
            <h1 className="flex-item">
              <img src={gameOfThronesCover} alt=" "/>
            </h1>
          </div>
          <div className="flex-container2">
            <h1 className="flex-item">
              <img src={topOfTheLakeCover} alt=" "/>
            </h1>
            <h1 className="flex-item">
              <img src={winterSunCover} alt=" "/>
            </h1>
            <h1 className="flex-item">
              <img src={youngPopeCover} alt=" "/>
            </h1>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
