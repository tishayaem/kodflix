import React from 'react';
import Cover from './Cover';
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('/rest/shows')
        .then(res => res.json())
        .then(movies => this.setState({movies}));
    }
    
    render() {
        return (
            <div className="Titles">
                <div className="container">
                     {
                        this.state.movies.map(movie => movie.title)              
                    }     
                </div>
             </div>
        )
    }
}