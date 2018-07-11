import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../css/App.css';
import Gallery from './Gallery';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                <a href="/"> 
                  Kodflix
                </a>
              </h1>
            </header>
          </div>
          
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:type/:id" component={Details} />
        
        </div>
      </Router>
    );
  }
}

export default App;
