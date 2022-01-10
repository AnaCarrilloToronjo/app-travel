import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CityDetails } from "../components/Cities/CityDetails";
import { NewCity } from "../components/Cities/NewCity";
import { CityScreen } from "../components/Cities/CityScreen";
import { PhotosScreen } from "../components/Cities/PhotosScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityScreen />} />
        <Route path="/:id" element={<CityDetails />} />
        <Route path="/NewCity" element={<NewCity />} />
        <Route path="/Photos" element={<PhotosScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
