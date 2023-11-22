import { useContext } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";

export default function SwitchAuthStatusButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthStatusContext)

  // スコープが狭いため、短め命名
  const handleAuthButton = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <button className="main-container--auth-button" onClick={handleAuthButton}>{isLoggedIn ? "ログアウト" : "ログイン"}</button>
  )
}
