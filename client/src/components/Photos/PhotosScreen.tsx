import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { url, getPhotos } from "../../services/photos";
import { PhotoEntity } from "../../model";

export const PhotosScreen = () => {
  const [photosIDs, setPhotosIDs] = useState<PhotoEntity[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setPhotosIDs(data);
      })
      .catch(() => {
        navigate("/web/login");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="photos_container">
        {photosIDs.map((photoID) => (
          <div>
            <img src={`${url}/${photoID}.png`} height={500} width={500} />
          </div>
        ))}
      </div>
    </>
  );
};
