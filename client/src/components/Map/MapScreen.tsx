import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Geocoder } from "./Geocoder";

const position: [number, number] = [40.3, -4];

export const MapScreen = props => {
  const { cityName } = props;
  console.log(cityName);
  return (
    <MapContainer
      style={{ width: "100vw", height: "auto" }}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
    >
      {cityName && <Geocoder address={cityName} />}
      <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />

      {/*<Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
  </Marker>*/}
    </MapContainer>
  );
};
