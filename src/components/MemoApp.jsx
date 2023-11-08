import { useState } from "react";
import MemoHeaderTitle from "./MemoHeaderTitle";
import MemoBody from "./MemoBody";

export default function MemoApp() {
  const [mode, setMode] = useState("index");

  return (
    <div>
      <div className="header">
        <MemoHeaderTitle mode={mode} />
      </div>
      <div className="body">
        <MemoBody mode={mode} setMode={setMode} />
      </div>
    </div>
  );
}
