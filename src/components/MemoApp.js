import { useState } from "react";
import { AuthStatusProvider } from "../context/AuthStatusContext";
import AuthStatus from "./AuthStatus";
import MemoMain from "./MemoMain";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <AuthStatusProvider>
      <>
        <div className="header">
          <AuthStatus />
        </div>
        <div className="body">
          <MemoMain action={action} setAction={setAction} />
        </div>
      </>
    </AuthStatusProvider>
  );
}
