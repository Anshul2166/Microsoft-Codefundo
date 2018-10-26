import React from "react";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcNwOx6j2oXaxJ7y8lOy8FpoT_WTPuXZE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      let google = window.google;
      const DirectionsService = new google.maps.DirectionsService();
      let lat, lng;
      if (navigator.geolocation) {
        //if browser supports geolocation and user allows us the access, then the condition is satisfied
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          lat = position.coords.latitude;
          lng = position.coords.longitude;
          DirectionsService.route(
            {
              origin: new google.maps.LatLng(lat,lng),
              destination: new google.maps.LatLng(17.5498931,78.5545764),
              travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                  lat:lat,
                  lng:lng
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );  
        });
      } else {
        //if getting the geolocation fails due to any reason, then show the alert
        alert("Location access denied");
      }
      
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(props.lat, props.lng)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default Map;
