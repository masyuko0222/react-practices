import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body() {
  const [memos, setMemos] = useState([]);
  const [mode, setMode] = useState("index");
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

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
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };
    const nextMemos = [ ...memos, newMemo ];
    save(nextMemos);

    setText(newMemo.content);
    setSelectedId(newMemo.id);
    setMode("edit");
  };

  const handleEditButton = () => {
    const editingMemo = memos.find((memo) => memo.id === selectedId);
    const editedMemo = { ...editingMemo, content: text };

    const nextMemos = memos.map((memo) =>
      memo.id === selectedId ? editedMemo : memo
    );
    save(nextMemos);

    setText("");
    setSelectedId(null);
    setMode("index");
  };

  const save = (memos) => {
    setMemos(memos);
    saveStorage(memos);
  };

  const saveStorage = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  return (
    <div>
      <MemoList memos={memos} />
      <AddButton handleAddButton={handleAddButton} />
      {mode === "edit" && (
        <Form
          text={text}
          setText={setText}
          handleEditButton={handleEditButton}
        />
      )}
    </div>
  );
}
