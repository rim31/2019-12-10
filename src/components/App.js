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
      resultats: [
        {
          x:50.023,
          y:10.044
        },
        {
          x:50.123,
          y:10.244
        },
        {
          x:50.233,
          y:10.140
        },
      ]
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
              <Mymap resultats={this.state.resultats}/>
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

