import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Photos } from "../Photos/Photos";
import { getPlaceById } from "../../services/places";

export const CityDetails = () => {
  const [place, setPlace] = useState({ city: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPlaceById(id)
      .then((data) => {
        setPlace(data);
      })
      .catch(() => {
        navigate("/web/login");
      });
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
