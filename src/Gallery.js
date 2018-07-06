import React from 'react';
import basketsCover from './images/baskets-poster.jpg';
import twinPeaksCover from './images/twin-peaks.jpg';
import gameOfThronesCover from './images/gameOfThrones-poster.jpg';
import topOfTheLakeCover from './images/top-of-the-lake-poster.jpg';
import winterSunCover from './images/winter-sun-poster.jpg';
import youngPopeCover from './images/young-pope-cover.jpg';
import Covers from './Covers';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="Titles">
                <div className="container1">
                    <Covers image={basketsCover} title='Baskets' id='baskets' type='tv-show'/>
                    <Covers image={twinPeaksCover} title='Twin Peaks' id='twin-peaks' type='tv-show' />
                    <Covers image={gameOfThronesCover} title='Game Of Thrones' id='game-of-thrones' type='tv-show'/>
                </div>

                <div className="container2">
                    <Covers image={topOfTheLakeCover} title='Top Of The Lake' id='top-of-the-lake' type='tv-show'/>
                    <Covers image={winterSunCover} title='Low Winter Sun' id='low-winter-sun' type='tv-show'/>
                    <Covers image={youngPopeCover} title='Young Pope' id='young-pope' type='tv-show'/>
                </div>
            </div>
        )
    }
}