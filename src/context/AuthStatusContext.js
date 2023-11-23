import { createContext, useState } from "react";

export const AuthStatusContext = createContext(false);

export const AuthStatusProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <AuthStatusContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthStatusContext.Provider>
  );
};
