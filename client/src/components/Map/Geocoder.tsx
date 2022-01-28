import React, { useEffect } from "react";
import * as ELG from "esri-leaflet-geocoder";
import { useMap } from "react-leaflet";

export const Geocoder = ({ address }) => {
  const map = useMap();
  useEffect(() => {
    //"AAPK26b48a4772db4e139729b0968fe340e7JFXgXgl643zcENVgepCM88CFPmJbFQRJM4jVb6t2dq3LX-gNswa6Q2vewD3pgSyV"
    ELG.geocode({
      apikey:
        "AAPK26b48a4772db4e139729b0968fe340e7JFXgXgl643zcENVgepCM88CFPmJbFQRJM4jVb6t2dq3LX-gNswa6Q2vewD3pgSyV"
    })
      .text(address)
      .run((err, results, response) => {
        const { lat, lng } = results.results[0].latlng;
        map.setView([lat, lng], 12);
      });
  }, [address]);

  return null;
};
