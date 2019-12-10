import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Mymap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <LeafletMap className="leaflet-container"
        center={[50.02, 10.04]}
        zoom={4}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[50.0231, 10.0441]}>
          <Popup>
            test.
          </Popup>
        </Marker>
         {//parcous du tableau des 20 pokémons et afichage de leurs image et leurs noms
            this.props.resultats.map((resultMap, key) =>
            <div className="marker" key={key}>
              <Marker position={[resultMap.x, resultMap.x]}>
                <Popup>
                  x : {resultMap.x}, y : {resultMap.y}
                </Popup>
              </Marker>

            </div>)
          }

      </LeafletMap>
    );
  }
}

export default Mymap