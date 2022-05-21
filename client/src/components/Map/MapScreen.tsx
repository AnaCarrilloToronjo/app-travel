import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Geocoder } from "./Geocoder";
import leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { getPlaces } from "../../services/places";
import { MapMarker } from "./MapMarker";

const MarkerIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const position: [number, number] = [40.3, -4];

export const MapScreen = (props) => {
  const [placeName, setPlaceName] = useState([]);

  useEffect(() => {
    getPlaces()
      .then((data) => {
        data.map((result) => setPlaceName([result.city]));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const { cityName } = props;
  return (
    <MapContainer
      style={{ width: "100vw", height: "auto" }}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
    >
      {/*cityName && <Geocoder address={cityName} />*/}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/*"https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />*/}
      {/*<Marker position={position} icon={MarkerIcon}></Marker>*/}

      {placeName.map((name) => (
        <MapMarker address={name} />
      ))}
    </MapContainer>
  );
};
