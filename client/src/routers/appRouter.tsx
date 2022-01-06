import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { City } from "../components/Cities/City";
import { CityDetails } from "../components/Cities/CityDetails";
import { NewCity } from "../components/Cities/NewCity";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<City />} />
        <Route path="/:id" element={<CityDetails />} />
        <Route path="/NewCity" element={<NewCity />} />
      </Routes>
    </BrowserRouter>
  );
};
