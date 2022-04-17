import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/context.provider";
import { getSessionCookie } from "./../session";

export const RequireAuth = () => {
  const { setUser } = useContext(Context);
  const [session, setSession] = useState(getSessionCookie());

  if (!session) {
    return <Navigate to="/web/login" />;
  } else {
    setUser(session);
  }
  return <Outlet />;
};
