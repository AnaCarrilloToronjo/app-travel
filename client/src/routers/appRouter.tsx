import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewCity } from "../components/Cities/NewCity";
import { CityScreen } from "../components/Cities/CityScreen";
import { PhotosScreen } from "../components/Photos/PhotosScreen";
import { DetailsScreen } from "../components/Cities/DetailsScreen";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Login/Register";
import { ContextProvider } from "../context/context.provider";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/web" element={<CityScreen />} />
              <Route path="/web/:id" element={<DetailsScreen />} />
              <Route path="/web/NewCity" element={<NewCity />} />
              <Route path="/web/Photos" element={<PhotosScreen />} />
            </Route>
            <Route path="/web/login" element={<Login />} />
            <Route path="/web/Register" element={<Register />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
};
