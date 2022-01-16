import React from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const handleSearch = e => {
  console.log(e.target.value);
};

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
      <div>
        <input name="search" onChange={handleSearch}></input>
        <SearchOutlinedIcon />
      </div>
    </div>
  );
};
