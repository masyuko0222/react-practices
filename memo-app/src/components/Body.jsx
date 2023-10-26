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
    const nextMemos = [...memos, newMemo];
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
    reset();
  };

  const handleDeleteButton = () => {
    const nextMemos = memos.filter((memo) => memo.id !== selectedId);

    save(nextMemos);
    reset();
  };

  const handleClickingMemoRow = (id) => {
    const selectedMemo = memos.find((memo) => memo.id === id);
    setText(selectedMemo.content);
    setSelectedId(selectedMemo.id);
    setMode("edit");
  };

  const save = (memos) => {
    setMemos(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const reset = () => {
    setText("");
    setSelectedId(null);
    setMode("index");
  };

  return (
    <div>
      <MemoList memos={memos} onClickMemo={handleClickingMemoRow} />
      <AddButton onClickAdd={handleAddButton} />
      {mode === "edit" && (
        <Form
          text={text}
          setText={setText}
          onClickEdit={handleEditButton}
          onClickDelete={handleDeleteButton}
        />
      )}
    </div>
  );
}
