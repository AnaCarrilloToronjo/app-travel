import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/context.provider";

export const RequireAuth = () => {
  const { user } = useContext(Context);
  //const user = "ana";
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
