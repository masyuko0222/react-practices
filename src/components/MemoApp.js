import { useState } from "react";
import ActionTitle from "./ActionTitle";
import MemoMain from "./MemoMain";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <div>
      <div className="header">
        <ActionTitle action={action} />
      </div>
      <div className="body">
        <MemoMain action={action} setAction={setAction} />
      </div>
    </div>
  );
}
