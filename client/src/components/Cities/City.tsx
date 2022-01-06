import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

export const City = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    //console.log("PRIMER GET");
    fetch("http://localhost:9000/stored/places", {
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
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [setPlace, place]);

  const handleDelete = id => {
    fetch(`http://localhost:9000/stored/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  };

  return (
    <div className="city__main-container">
      <Navbar />
      <div className="city__content">
        {place.map(places => (
          <div key={places._id} className="city__card">
            <div
              className="city_card-content"
              onClick={() => navigate(`/${places._id}`)}
            >
              <img src="https://i.pinimg.com/originals/92/6b/fc/926bfc5029438b67a490bbe8c863af3e.jpg" />
              <div className="city__card-content">
                <div>{places.city}</div>
                <div>
                  {Moment(`${places.fromDate}`).format("DD-MM-YYYY")} to{" "}
                  {Moment(`${places.toDate}`).format("DD-MM-YYYY")}
                </div>
              </div>
            </div>
            <div className="city__card-button">
              <Delete onClick={() => handleDelete(places._id)} />
              <Edit>EDIT</Edit>
            </div>
          </div>
        ))}
      </div>
      <div className="city__button-link">
        <button
          type="submit"
          className="city__button"
          onClick={() => navigate("/newCity")}
        >
          +
        </button>
      </div>
    </div>
  );
};
