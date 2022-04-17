import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../../context/context.provider";
import Cookies from "js-cookie";

export const Navbar = () => {
  const { user, setUser } = useContext(Context);

  const handleLogout = () => {
    setUser("");
    Cookies.remove("session");
  };
  return (
    <div className="navbar_container">
      <ul>
        <li>
          <Link to="/web">Home</Link>
        </li>
        <li>
          <Link to="/web/photos">Photos</Link>
        </li>
      </ul>
      <div className="navbar_user">
        <AccountCircleIcon />
        <label>{user}</label>
        <Link onClick={handleLogout} to="/web">
          Logout
        </Link>
      </div>
    </div>
  );
};
