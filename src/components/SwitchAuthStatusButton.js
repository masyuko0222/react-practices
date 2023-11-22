import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export default function SwitchAuthStatusButton() {
  const isLoggedIn = useContext(AuthStatusContext)

  return (
    <button className="main-container--auth-button">{isLoggedIn ? "ログアウト" : "ログイン"}</button>
  )
}
