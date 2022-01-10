import React, { useEffect, useState } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

interface IPhoto {
  place_id: string;
  photos: Buffer;
}

export const Photos = props => {
  const { id } = props;
  const [photosIDs, setPhotosIDs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/photos/cities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setPhotosIDs(data);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div className="photos_container">
        {photosIDs.map(photoID => (
          <div key={photoID}>
            <img src={`http://localhost:9000/photos/${photoID}.png`} />
          </div>
        ))}
      </div>
    </>
  );
};
