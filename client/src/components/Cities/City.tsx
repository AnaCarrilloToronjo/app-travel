import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import { MapScreen } from "../Map/MapScreen";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PhotoIcon from "@mui/icons-material/Photo";
import { getPlaces, deletePlace } from "../../services/places";
import { url } from "../../services/photos";

export const City = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const [cityName, setCityName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlaces()
      .then((data) => {
        setPlace(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));

    setIsLoading(false);
  }, [isLoading]);

  const handleDelete = (id) => {
    deletePlace(id);
    setIsLoading(true);
  };
  const handleClick = (cityName) => {
    setCityName(cityName);
  };

  return (
    <div className="city_map">
      <div className="city_main-container">
        <div className="city_content">
          {place.map((places) => (
            <ListItem
              key={places._id}
              className="city__card"
              secondaryAction={
                <div>
                  <IconButton>
                    <Delete onClick={() => handleDelete(places._id)} />
                  </IconButton>
                  <IconButton>
                    <Edit onClick={() => navigate(`/web/${places._id}`)} />
                  </IconButton>
                </div>
              }
            >
              <ListItemButton onClick={() => handleClick(places.city)}>
                <Avatar
                  className="city_photo"
                  src={`${url}/${places.photo}.png`}
                >
                  <PhotoIcon className="city_photo-icon" />
                </Avatar>
                <div className="city__card-content">
                  <div>{places.city}</div>
                  <div className="city_card-date">
                    {places.fromDate && (
                      <span>
                        {Moment(`${places.fromDate}`).format("Do MMMM YY")}
                      </span>
                    )}
                    {places.toDate && (
                      <span>
                        &nbsp;-&nbsp;
                        {Moment(`${places.toDate}`).format("Do MMMM YY")}
                      </span>
                    )}
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </div>
        <button
          type="button"
          className="city__button"
          onClick={() => navigate("/web/newCity")}
        >
          +
        </button>
      </div>
      <MapScreen cityName={cityName} />
    </div>
  );
};
