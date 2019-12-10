import React, { Component } from 'react';
import './styles/App.css';
import Main from './Main';
import Mymap from './Mymap';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data          : [],//response fetch url
    };
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter">
            <Main />
          </div>
          <div className="column">
              <Mymap />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

