import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { getPhotos } from "../../services/photos";
import { PhotoEntity } from "../../model";

export const PhotosScreen = () => {
  const [photosIDs, setPhotosIDs] = useState<PhotoEntity[]>([]);

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
          <div>
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
