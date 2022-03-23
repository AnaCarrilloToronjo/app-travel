import React, { createContext, useState } from "react";

const initialContextValue = {
  user: "",
  setUser: (value: string) => null,
};

export const Context = createContext(initialContextValue);

export const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string>("");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
