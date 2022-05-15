import * as ELG from "esri-leaflet-geocoder";

export const MapBox = (place) => {
  var promise = new Promise((resolve, reject) => {
    ELG.geocode({
      requestParams: {
        maxLocations: 5,
      },
      apikey:
        "AAPK26b48a4772db4e139729b0968fe340e7JFXgXgl643zcENVgepCM88CFPmJbFQRJM4jVb6t2dq3LX-gNswa6Q2vewD3pgSyV",
    })
      .text(place)
      .run((err, results, response) => {
        resolve(results);
      });
  });
  return promise;
};
