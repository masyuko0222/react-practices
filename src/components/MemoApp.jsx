import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

export default function MemoApp() {
  const [mode, setMode] = useState("index");

  return (
    <div>
      <div className="header">
        <Header mode={mode} />
      </div>
      <div className="body">
        <Body mode={mode} setMode={setMode} />
      </div>
    </div>
  );
}
