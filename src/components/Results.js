import React from 'react'

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          {/* {this.props.resultats.map((resultMap, key) => */}
          <div className="columns is-desktop">
          {this.state.resultats.map((resultMap, key) =>
            <div className="column" key={key} id={resultMap.name}  onClick={() => {this.handleSelect(resultMap.name)}}>
                bien : pièces, prix
                  <p>x : {resultMap.x}</p>
                  <p>y : {resultMap.y}</p>
                </div>
            )}
      </div>
      </div>
    );
  }
}

export default Results