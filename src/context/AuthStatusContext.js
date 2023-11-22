import { createContext, useState } from "react";

export const AuthStatusContext = createContext(false);

export const AuthStatusProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <AuthStatusContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthStatusContext.Provider>
  )
}
