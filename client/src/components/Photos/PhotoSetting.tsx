import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

export const PhotosSetting = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar-menu">
        <SettingsIcon
          type="button"
          onClick={handleClick}
          className="navbar-SettingsIcon"
        />

        {showMenu && (
          <div className="navbar-list">
            <button className="navbar-list-item">Select principal photo</button>
            <button className="navbar-list-item">Upload photo</button>
            <button className="navbar-list-item">Delete photo</button>
          </div>
        )}
      </div>
    </>
  );
};
