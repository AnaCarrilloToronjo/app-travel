import React from "react";
import { Link } from "react-router-dom";

export const NavbarDetails = () => {
  return (
    <div className="navbar_container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
