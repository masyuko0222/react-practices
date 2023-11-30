import { createContext, useState } from "react";

export const AuthStatusContext = createContext(false);

export const AuthStatusProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthStatusContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthStatusContext.Provider>
  );
};
