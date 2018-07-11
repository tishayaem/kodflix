import React from 'react';
import { movieDB } from '../tvShowDatabase'
import { Redirect } from 'react-router-dom'

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        let movieID = this.props.match.params.id
        this.setState({
            movie:  movieDB.find(movie => movie.id === movieID)
        }) 
    }

    render() {
        if (this.state.movie === undefined) {
            return <Redirect to='/notfound' />
        }

        return (
            <div className = "detailTitle">
                <h1>{this.state.movie.title}</h1>
            </div>
        );
    }
}