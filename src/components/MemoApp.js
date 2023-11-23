import { AuthStatusProvider } from "../context/AuthStatusContext";
import AuthStatus from "./AuthStatus";
import MemoMain from "./MemoMain";

export default function MemoApp() {
  return (
    <AuthStatusProvider>
      <>
        <div className="header">
          <AuthStatus />
        </div>
        <div className="body">
          <MemoMain />
        </div>
      </>
    </AuthStatusProvider>
  );
}
