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

  return (
    <div className="details_main">
      <div>
        <h2>{place.city}</h2>
        <hr />
        <div className="details_container">
          <Photos id={id} />
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
