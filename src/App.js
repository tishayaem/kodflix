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
          
          <div className="container1">
            
            <div className="item">
              <img src={basketsCover} alt=" "/>
              <div className="item-overlay">
                <h1>Baskets</h1>
              </div>
            </div>
            
            <div className="item">
              <img src={twinPeaksCover} alt=" "/>
              <div className="item-overlay">
                <h1>Twin Peaks</h1>
              </div>
            </div>
            
            <div className="item">
              <img src={gameOfThronesCover} alt=" "/>
              <div className="item-overlay">
                <h1>Game of Thrones</h1>
              </div>
            </div>

          </div>
          
          <div className="container2">
            
            <div className="item">
              <img src={topOfTheLakeCover} alt=" "/>
              <div className="item-overlay">
                <h1>Top of the Lake</h1>
              </div>
            </div>
            
            <div className="item">
              <img src={winterSunCover} alt=" "/>
              <div className="item-overlay">
                <h1>Low Winter Sun</h1>
              </div>
            </div>
            
            <div className="item">
              <img src={youngPopeCover} alt=" "/>
              <div className="item-overlay">
                <h1>Young Pope</h1>
              </div>
            </div>
         
          </div>
        </div>

      </div>
    );
  }
}

export default App;
