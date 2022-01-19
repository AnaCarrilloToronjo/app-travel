import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PhotoIcon from "@mui/icons-material/Photo";

export const City = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/stored", {
      method: "GET",
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

    setIsLoading(false);
  }, [isLoading]);

  const handleDelete = id => {
    fetch(`http://localhost:9000/stored/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    setIsLoading(true);
  };

  return (
    <div className="city_main-container">
      <div className="city_content">
        {place.map(places => (
          <ListItem
            key={places._id}
            className="city__card"
            secondaryAction={
              <div>
                <IconButton>
                  <Delete onClick={() => handleDelete(places._id)} />
                </IconButton>
                <IconButton>
                  <Edit />
                </IconButton>
              </div>
            }
          >
            <ListItemButton onClick={() => navigate(`/${places._id}`)}>
              <Avatar
                className="city_photo"
                src={`http://localhost:9000/photos/${places.photo}.png`}
              >
                <PhotoIcon className="city_photo-icon" />
              </Avatar>
              <div className="city__card-content">
                <div>{places.city}</div>
                <div className="city_card-date">
                  {places.fromDate ? (
                    <div>
                      {Moment(`${places.fromDate}`).format("DD-MM-YYYY")}
                    </div>
                  ) : (
                    ""
                  )}
                  {places.toDate ? (
                    <div>
                      <label> to </label>
                      <span>
                        {Moment(`${places.toDate}`).format("DD-MM-YYYY")}
                      </span>
                    </div>
                  ) : (
                    ""
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
        onClick={() => navigate("/newCity")}
      >
        +
      </button>
    </div>
  );
};
