import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "../css/App.css";
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
