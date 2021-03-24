import React from "react";

import "./Mapbox.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Mapbox extends React.Component {
  render() {
    const styles = {
      width: "600px",
      height: "320px",
      overflow: "hidden",
      //   border: "1px solid black",
      borderRadius: "25px",
      boxShadow: " 0px 0px 8px #00000036",
      top: "10px",
    };
    const boxStyles = {
      maxWidth: "600px",
      maxHeight: "300px",
    };
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 37.5, lng: 127 }}
          style={styles}
          containerStyle={boxStyles}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(Mapbox);
