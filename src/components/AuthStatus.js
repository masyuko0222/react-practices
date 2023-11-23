import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export default function AuthStatus() {
  const { isAuthenticated } = useContext(AuthStatusContext);

  return (
    <span className="header__title--gray">
      {isAuthenticated ? "ログイン中" : "未ログイン"}
    </span>
  );
}
