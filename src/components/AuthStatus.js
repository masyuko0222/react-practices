import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export default function AuthStatus() {
  const isLoggedIn = useContext(AuthStatusContext)

  return (
    <span className="header__title--gray">{isLoggedIn ? "ログイン中" : "未ログイン"}</span>
  )
}
