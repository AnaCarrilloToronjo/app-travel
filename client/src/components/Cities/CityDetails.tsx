import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photos } from "./Photos";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

interface IPlace {
  _id: string;
  city: string;
}

export const CityDetails = () => {
  const [place, setPlace] = useState({ city: "" });
  const [photo, setPhoto] = useState({ photo: null });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/stored/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setPlace(data);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, [setPlace]);

  const handleUploadPhoto = e => {
    setPhoto({
      photo: e.target.files[0]
    });
  };

  const handleSubmitPhoto = e => {
    let formData = new FormData();
    formData.append("photo", photo.photo);
    fetch(`http://localhost:9000/photos/${id}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="details_main">
      <div>
        <h2>{place.city}</h2>
        <hr />
        <div className="details_container">
          <Photos id={id} />
          <div className="details_upload">
            <label className="custom-file-upload">
              <input
                type="file"
                //multiple
                id="photos"
                name="photos"
                accept=".jpeg, .png, .jpg"
                onChange={handleUploadPhoto}
              />
              <AddAPhotoOutlinedIcon height="1000px" />
            </label>
            <button
              onClick={handleSubmitPhoto}
              className="custom-file-upload-button"
            >
              Upload photo
            </button>
          </div>
        </div>
        <div className="details_information">
          <label>Additional Information</label>
          <hr />
          <textarea />
        </div>
      </div>
    </div>
  );
};
