import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export const useAuthStatus = () => {
  return useContext(AuthStatusContext);
};
