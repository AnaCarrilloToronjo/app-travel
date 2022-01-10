import React from "react";
import { City } from "./City";
import { Navbar } from "../Navbar/Navbar";

export const CityScreen = () => {
  return (
    <div className="city_screen">
      <Navbar />
      <City />
    </div>
  );
};
