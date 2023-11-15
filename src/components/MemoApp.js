import { useState } from "react";
import MemoHeaderTitle from "./MemoHeaderTitle";
import MemoMainPage from "./MemoMainPage";

export default function MemoApp() {
  const [action, setAction] = useState("index");

  return (
    <div>
      <div className="header">
        <MemoHeaderTitle action={action} />
      </div>
      <div className="body">
        <MemoMainPage action={action} setAction={setAction} />
      </div>
    </div>
  );
}
