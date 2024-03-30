"use client";
import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  console.log("isloggedIn", isloggedIn);

  return (
    <AppContext.Provider value={{ isloggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };