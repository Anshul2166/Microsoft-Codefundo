import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "./Map.css";

//Our map that gets generated with marker on it.
//The marker denotes the current position of the user on the map
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

//The main class which will be called from outside
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Set Raipur's location as default location
      currentPosition: {
        lat: 21.23,
        lng: 81.60
      }
    };
  }

  //componentWillMount will get the geolocation before the first render starts. 
  componentWillMount(){
    this.getGeoLocation();
  }

  //Since geolocation using navigator is async, the map would first get loaded with default location
  //and then will move to correct user's position once the geolocation method returns the coordinates through state
  getGeoLocation = () => {
    if (navigator.geolocation) {
        //if browser supports geolocation and user allows us the access, then the condition is satisfied
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
        //if getting the geolocation fails due to any reason, then show the alert
        alert("Location access denied");
    }
  }

  render() {
    const key = process.env.REACT_APP_GOOGLE_MAPS_API; //the google map api key
    
    // url is the url of google map api along with api key
    let url =
      "https://maps.googleapis.com/maps/api/js?key=" +
       key +
      "&v=3.exp&libraries=geometry,drawing,places";

    return (
      <MapWithAMarker
        currentPosition={this.state.currentPosition}
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="map-container" style={{ height: "85vh" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
