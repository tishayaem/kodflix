import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import "../css/App.css";
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from "./NotFound";
import ReactGA from "react-ga";


class App extends Component {
  constructor({history, location}){
    super();
    ReactGA.initialize("UA-124401049-1");
    history.listen(location => this.trackPageView(location));

  }
  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }
  render() {
    return (
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                <Link to="/">Kodflix</Link>
              </h1>
            </header>
          </div>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/:type/:id" component={Details} />
            <Route exact path="/notfound" component={NotFound} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
