import React from "react";
import Cover from "./Cover";
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("/rest/shows")
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="Titles">
        <div className="container">
          {this.state.movies.map(function(movie) {
            return (
              <Cover id={movie.id} title={movie.title} type={movie.type} />
            );
          })}
        </div>
      </div>
    );
  }
}
