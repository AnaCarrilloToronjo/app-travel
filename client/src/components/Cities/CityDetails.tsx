import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

interface IPlace {
  _id: string;
  city: string;
  photos: Buffer;
}

export const CityDetails = () => {
  const [place, setPlace] = useState({ city: "", photos: null });
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
  }, [place]);

  const handleUploadPhoto = e => {
    setPlace({
      ...place,
      photos: e.target.files[0]
    });
  };

  const handleSubmitPhoto = e => {
    let formData = new FormData();
    formData.append("photos", place.photos);
    fetch(`http://localhost:9000/stored/img/${id}`, {
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
          <ul>
            <li>
              <img
                src={`http://localhost:9000/stored/img/${place._id}.png`}
                height={300}
                width={200}
              />
            </li>
            <li>
              <img src="https://i.pinimg.com/originals/92/6b/fc/926bfc5029438b67a490bbe8c863af3e.jpg" />
            </li>
            <li>
              <input
                type="file"
                multiple
                className="form-control"
                id="photos"
                name="photos"
                accept=".jpeg, .png, .jpg"
                onChange={handleUploadPhoto}
              />
              <button onClick={handleSubmitPhoto}>SUBIR</button>
            </li>
          </ul>
        </div>
        <div>
          <span>Information</span>
        </div>
      </div>
    </div>
  );
};
