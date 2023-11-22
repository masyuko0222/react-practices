import { createContext, useState } from "react";

export const AuthStatusContext = createContext(false);

export const AuthStatusProvider = ({ children }) => {
  return (
    <AuthStatusContext.Provider value={false}>{children}</AuthStatusContext.Provider>
  )
}
