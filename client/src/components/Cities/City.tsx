import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import { MapScreen } from "../Map/MapScreen";
import Delete from "@mui/icons-material/Delete";
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
      .catch(() => {
        navigate("/web");
      });

    setIsLoading(false);
  }, [isLoading]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
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
              onClick={(e) => navigate(`/web/${places._id}`)}
              key={places._id}
              className="city__card"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <Delete onClick={(e) => handleDelete(e, places._id)} />
                </IconButton>
              }
            >
              <ListItemButton onClick={() => handleClick(places.city)}>
                <Avatar
                  className="city_photo"
                  src={`${url}/${places.photo}.png`}
                >
                  <PhotoIcon />
                </Avatar>
                <div className="city__card-content">
                  <div>{places.city}</div>
                  <div className="city_card-date">
                    {places.fromDate && (
                      <span>
                        {Moment(`${places.fromDate}`).format("MMM D, YYYY")}
                      </span>
                    )}
                    {places.toDate && (
                      <span>
                        &nbsp;-&nbsp;
                        {Moment(`${places.toDate}`).format("MMM D, YYYY")}
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
