import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body() {
  const [memos, setMemos] = useState([]);
  const [mode, setMode] = useState("index");
  const [text, setText] = useState("");

  useEffect(() => {
    const storagedMemos = localStorage.getItem("memos");

    if (storagedMemos) {
      const parsedMemos = JSON.parse(storagedMemos);
      setMemos(parsedMemos);
    } else {
      setMemos([]);
    }
  }, []);

  const handleAddButton = () => {
    const newMemo = addMemo();
    setText(newMemo.content);
    setMode("edit");
  };

  const addMemo = () => {
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };
    const nextMemos = [...memos, newMemo];
    setMemos(nextMemos);
    saveStorage(nextMemos);

    return newMemo;
  };

  const saveStorage = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  return (
    <div>
      <MemoList memos={memos} />
      <AddButton handleAddButton={handleAddButton} />
      {mode === "edit" && <Form text={text} setText={setText} />}
    </div>
  );
}
