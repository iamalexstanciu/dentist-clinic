import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 44.42327758392515, lng: 26.176648691591023 }, // Replace with your business's latitude and longitude
      zoom: 15, // Adjust the zoom level as needed
    };

    this.map = new window.google.maps.Map(this.mapRef.current, mapOptions);
    this.marker = new window.google.maps.Marker({
      position: { lat: 44.42327758392515, lng: 26.176648691591023 }, // Replace with your business's latitude and longitude
      map: this.map,
      title: "Cabinet 1 Decembrie", // Replace with your business name
    });
  }

  render() {
    return <div ref={this.mapRef} style={{ width: "50%", height: "400px" }} />;
  }
}

export default Map;
