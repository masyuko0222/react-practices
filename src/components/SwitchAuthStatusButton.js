import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export default function SwitchAuthStatusButton() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthStatusContext);

  // スコープが狭いため、短め命名
  const handleAuthButton = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <button className="main-container--auth-button" onClick={handleAuthButton}>
      {isAuthenticated ? "ログアウト" : "ログイン"}
    </button>
  );
}
