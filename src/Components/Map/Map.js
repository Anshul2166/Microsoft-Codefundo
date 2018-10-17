import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "./Map.css";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng }}>
      <Marker position={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng }} />
    </GoogleMap>
  ))
);

class Map extends Component {
  constructor(props){
    super(props);
    this.state={
      //Set Raipur's location as default location
      currentPosition:{
        lat:21.2514,
        lng:81.6296,
      }
    };
  }
  render() {
    const title=process.env.REACT_APP_GOOGLE_MAPS_API;
    let url="https://maps.googleapis.com/maps/api/js?key="+title+"&v=3.exp&libraries=geometry,drawing,places";
    return (
      <MapWithAMarker
        currentPosition={this.state.currentPosition}
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
