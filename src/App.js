import React, { Component } from 'react';
import './App.css';
import basketsCover from './images/baskets-poster.jpg';
import twinPeaksCover from './images/twin-peaks.jpg';
import gameOfThronesCover from './images/gameOfThrones-poster.jpg';
import topOfTheLakeCover from './images/top-of-the-lake-poster.jpg';
import winterSunCover from './images/winter-sun-poster.jpg';
import youngPopeCover from './images/young-pope-cover.jpg';
import Covers from './Covers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kodflix</h1>
        </header>
        <div className="Titles">
          <div className="container1">
            <Covers image={basketsCover} title='Baskets' />
            <Covers image={twinPeaksCover} title='Twin Peaks' />
            <Covers image={gameOfThronesCover} title='Game Of Thrones' />
          </div>

          <div className="container2">
            <Covers image={topOfTheLakeCover} title='Top Of The Lake' />
            <Covers image={winterSunCover} title='Low Winter Sun' />
            <Covers image={youngPopeCover} title='Young Pope' />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
