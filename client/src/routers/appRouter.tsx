import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewCity } from "../components/Cities/NewCity";
import { CityScreen } from "../components/Cities/CityScreen";
import { PhotosScreen } from "../components/Photos/PhotosScreen";
import { DetailsScreen } from "../components/Cities/DetailsScreen";
import { Login } from "../components/Login/login";
import { Register } from "../components/Login/Register";
import { ContextProvider } from "../context/context.provider";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<CityScreen />} />
              <Route path="/:id" element={<DetailsScreen />} />
              <Route path="/NewCity" element={<NewCity />} />
              <Route path="/Photos" element={<PhotosScreen />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
};
