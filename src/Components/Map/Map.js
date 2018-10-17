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
    <GoogleMap
      defaultZoom={8}
      center={{
        lat: props.currentPosition.lat,
        lng: props.currentPosition.lng
      }}
    >
      <Marker
        position={{
          lat: props.currentPosition.lat,
          lng: props.currentPosition.lng
        }}
      />
    </GoogleMap>
  ))
);

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Set Raipur's location as default location
      currentPosition: {
        lat: 51.2514,
        lng: 81.6296
      }
    };
  }
  componentWillMount(){
    this.getGeoLocation();
  }
  getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position.coords);
                this.setState(prevState => ({
                  currentPosition: {
                    ...prevState.currentPosition,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  },
                  isMarkerShown: true
                }));
                console.log(this.state);
            }
        )
    } else {
        alert("Location access denied");
    }
  }

  render() {
    const title = process.env.REACT_APP_GOOGLE_MAPS_API;
    let url =
      "https://maps.googleapis.com/maps/api/js?key=" +
      title +
      "&v=3.exp&libraries=geometry,drawing,places";
    // this.getGeoLocation();
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
