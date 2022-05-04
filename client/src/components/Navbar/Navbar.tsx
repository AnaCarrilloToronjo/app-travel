import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Context } from "../../context/context.provider";
import { logout } from "../../services/users";

export const Navbar = () => {
  const { user } = useContext(Context);
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
        <Link onClick={() => logout()} to="/web/login">
          Logout
        </Link>
      </div>
    </div>
  );
};
