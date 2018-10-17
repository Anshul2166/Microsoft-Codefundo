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
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    const title=process.env.REACT_APP_GOOGLE_MAPS_API;
    let url="https://maps.googleapis.com/maps/api/js?key="+title+"&v=3.exp&libraries=geometry,drawing,places";
    return (
      <MapWithAMarker
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
