import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";

interface IPhoto {
  photoId: string;
  principal: boolean;
}

export const Photos = props => {
  const { id } = props;
  const [photosIDs, setPhotosIDs] = useState<IPhoto[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("petición");
    fetch(`http://localhost:9000/photos/cities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let photos = data.map(photoID => {
          return { photoId: photoID, principal: false };
        });
        setPhotosIDs(photos);
      })
      .catch(error => console.error("Error fetching data: ", error));

    setIsLoading(false);
  }, [isLoading]);

  const handleChangePhoto = PhotoId => {
    fetch(`http://localhost:9000/stored/${id}`, {
      method: "PUT",
      body: JSON.stringify({ photo: PhotoId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleUploadPhoto = e => {
    let formData = new FormData();
    formData.append("photo", e.target.files[0]);
    fetch(`http://localhost:9000/photos/${id}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data));

    setShowMenu(false);
    setIsLoading(true);
  };

  const handleDeletePhoto = id => {
    fetch(`http://localhost:9000/photos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

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
        {photosIDs.map(photoID => (
          <div key={photoID.photoId} id="photo-div">
            <img src={`http://localhost:9000/photos/${photoID.photoId}.png`} />

            {showMenu && (
              <div>
                <DeleteIcon
                  className="photo-icon"
                  onClick={() => handleDeletePhoto(photoID.photoId)}
                />
                <ImageIcon
                  className="photo-icon"
                  onClick={() => handleChangePhoto(photoID.photoId)}
                />
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
