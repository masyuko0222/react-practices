import { useAuthStatus } from "../hook/useAuthStatus";

export default function SwitchAuthStatusButton() {
  const { isAuthenticated, setIsAuthenticated } = useAuthStatus();

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
