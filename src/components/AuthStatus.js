import { useAuthStatus } from "../hook/useAuthStatus";

export default function AuthStatus() {
  const { isAuthenticated } = useAuthStatus()

  return (
    <span className="header__title--gray">
      {isAuthenticated ? "ログイン中" : "未ログイン"}
    </span>
  );
}
