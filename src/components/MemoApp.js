import { useState } from "react";
import ActionTitle from "./ActionTitle";
import MemoMainPage from "./MemoMainPage";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <div>
      <div className="header">
        <ActionTitle action={action} />
      </div>
      <div className="body">
        <MemoMainPage action={action} setAction={setAction} />
      </div>
    </div>
  );
}
