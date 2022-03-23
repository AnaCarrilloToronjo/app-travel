import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../../context/context.provider";

export const Navbar = () => {
  const { user, setUser } = useContext(Context);

  const handleLogout = () => {
    setUser("");
  };
  return (
    <div className="navbar_container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
      <div className="navbar_user">
        <AccountCircleIcon />
        <label>{user}</label>
        <Link onClick={handleLogout} to="/">
          Logout
        </Link>
      </div>
    </div>
  );
};
