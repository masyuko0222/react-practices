import { useState } from "react";
import MemoHeaderTitle from "./MemoHeaderTitle";
import MemoBody from "./MemoBody";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <div>
      <div className="header">
        <MemoHeaderTitle action={action} />
      </div>
      <div className="body">
        <MemoBody action={action} setAction={setAction} />
      </div>
    </div>
  );
}
