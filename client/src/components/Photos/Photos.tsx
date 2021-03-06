import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import Tooltip from "@mui/material/Tooltip";
import {
  url,
  getPhotoById,
  uploadPhoto,
  deletePhoto,
} from "../../services/photos";
import { putPhoto } from "../../services/places";
import { PhotoEntity } from "../../model";

export const Photos = (props) => {
  const { id } = props;
  const [photosIDs, setPhotosIDs] = useState<PhotoEntity[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getPhotoById(id)
      .then((data) => {
        let photos = data.map((photoID) => {
          return { photoId: photoID };
        });
        setPhotosIDs(photos);
      })
      .catch(() => {
        navigate("/web/login");
      });

    setIsLoading(false);
  }, [isLoading]);

  const handleChangePhoto = (PhotoId) => {
    putPhoto(id, PhotoId);
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleUploadPhoto = (e) => {
    let formData = new FormData();
    formData.append("photo", e.target.files[0]);
    uploadPhoto(id, formData);

    setIsLoading(true);
  };

  const handleDeletePhoto = (id) => {
    deletePhoto(id);

    setIsLoading(true);
  };

  return (
    <>
      <div className="photos-menu">
        <SettingsIcon
          type="button"
          onClick={handleClick}
          className="photos-SettingsIcon"
        />
      </div>
      <div className="photos_container">
        {photosIDs.map((photoID) => (
          <div key={photoID.photoId} id="photo-div">
            <img src={`${url}/${photoID.photoId}.png`} />

            {showMenu && (
              <div>
                <Tooltip title="Delete photo">
                  <DeleteIcon
                    className="photo-icon"
                    onClick={() => handleDeletePhoto(photoID.photoId)}
                  />
                </Tooltip>
                <Tooltip title="Select principal photo">
                  <ImageIcon
                    className="photo-icon"
                    onClick={() => handleChangePhoto(photoID.photoId)}
                  />
                </Tooltip>
              </div>
            )}
          </div>
        ))}
        <div className="photo-button">
          <label className="custom-file-upload">
            <input
              type="file"
              id="photos"
              name="photos"
              accept=".jpeg, .png, .jpg"
              onChange={handleUploadPhoto}
            />
            <AddAPhotoIcon className="photo-button-icon" />
          </label>
        </div>
      </div>
    </>
  );
};
