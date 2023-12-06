import { useAuthStatus } from "../hook/useAuthStatus";

export default function SwitchAuthStatusButton() {
  const { isAuthenticated, login, logout } = useAuthStatus();

  return isAuthenticated ? (
    <Button onClick={logout}>ログアウト</Button>
  ) : (
    <Button onClick={login}>ログイン</Button>
  );
}

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="main-container--auth-button">
      {children}
    </button>
  );
};
