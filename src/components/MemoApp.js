import { useState } from "react";
import ActionTitle from "./ActionTitle";
import MemoDashBoard from "./MemoDashBoard";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <div>
      <div className="header">
        <ActionTitle action={action} />
      </div>
      <div className="body">
        <MemoDashBoard action={action} setAction={setAction} />
      </div>
    </div>
  );
}
