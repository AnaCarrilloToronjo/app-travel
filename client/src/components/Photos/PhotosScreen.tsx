import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { getPhotos } from "../../services/photos";

export const PhotosScreen = () => {
  const [photosIDs, setPhotosIDs] = useState([]);

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setPhotosIDs(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="photos_container">
        {photosIDs.map((photoID) => (
          <div key={photoID}>
            <img
              src={`http://localhost:9000/photos/${photoID}.png`}
              height={500}
              width={500}
            />
          </div>
        ))}
      </div>
    </>
  );
};
