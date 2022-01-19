import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavbarDetails = () => {
  return (
    <div className="navbar__container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
