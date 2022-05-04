import React from "react";
import Cookies from "js-cookie";

export const setSessionCookie = (session: any): void => {
  Cookies.remove("session");
  Cookies.set("session", JSON.stringify(session), { expires: 14 });
};

export const getSessionCookie: any = () => {
  const sessionCookie = Cookies.get("session");
  if (sessionCookie === undefined) {
    return {};
  } else {
    return sessionCookie;
  }
};

export const SessionContext = React.createContext(getSessionCookie());
