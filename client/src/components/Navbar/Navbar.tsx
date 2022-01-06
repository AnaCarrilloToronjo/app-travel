import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const handleSearch = e => {
  console.log(e.target.value);
};

export const Navbar = props => {
  return (
    <div className="navbar__container">
      <input name="search" onChange={handleSearch}></input>
      <SearchOutlinedIcon />
    </div>
  );
};
