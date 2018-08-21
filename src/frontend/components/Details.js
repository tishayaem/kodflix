import React from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading/Loading";
export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieID = this.props.match.params.id;
    fetch("/rest/shows")
      .then(res => res.json())
      .then(movie => this.setState({movie: movie.find(movie => movie.id === movieID)}))
  }

  render() {
    if (Object.keys(this.state.movie).length === 0) {
      return (
        <div>
          {" "}
          <Loading />{" "}
        </div>
      );
    } else if (this.state.movie === undefined) {
      return <Redirect to="/notfound" />;
    } else {
      return (
        <div className="detailMovie">
          <h1>{this.state.movie.title}</h1>
          <div className="movieInfo">
            <div className="item1">
              <img
                src={require(`../images/${this.state.movie.id}.jpg`)}
                className="detailImage"
                alt=""
              />
            </div>
            <div className="item2">{this.state.movie.synopsis}</div>
          </div>
        </div>
      );
    }
  }
}
