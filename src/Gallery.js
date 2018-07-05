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
        )
    }
}