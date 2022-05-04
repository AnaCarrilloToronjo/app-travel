import * as ELG from "esri-leaflet-geocoder";
import leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useMap } from "react-leaflet";

const MarkerIcon = leaflet.icon({
  iconUrl: icon,
  //shadowUrl: iconShadow,
  iconSize: [21, 31], // size of the icon
  iconAnchor: [10, 31], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -31], // point from which the popup should open relative to the iconAnchor
});

export const MapMarker = ({ address }) => {
  const map = useMap();
  ELG.geocode({
    apikey:
      "AAPK26b48a4772db4e139729b0968fe340e7JFXgXgl643zcENVgepCM88CFPmJbFQRJM4jVb6t2dq3LX-gNswa6Q2vewD3pgSyV",
  })
    .text(address)
    .run((err, results, response) => {
      console.log(address);
      leaflet
        .marker(results.results[0].latlng, { icon: MarkerIcon })
        .addTo(map)
        .bindPopup(address);
    });
  return null;
};
