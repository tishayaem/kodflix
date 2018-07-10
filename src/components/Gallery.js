import React from 'react';
import Covers from './Covers';
import { movieDB } from '../tvShowDatabase'
export default class Gallery extends React.Component {
    render() {
        return (
            <div className="Titles">
                <div className="container">
                    {
                        movieDB.map(function (movie) {
                            return <Covers image={movie.image} title={movie.title} id={movie.id} type={movie.type} />
                        })
                    }     
                </div>
            </div>
        )
    }
}