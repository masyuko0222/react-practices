import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import MemoForm from "./MemoForm";

export default function MemoBody({ mode, setMode }) {
  const [allMemos, setAllMemos] = useState([]);
  const [text, setText] = useState("");
  const [targetId, setTargetId] = useState(null);

  useEffect(() => {
    const jsonAllMemos = localStorage.getItem("memos");

    if (jsonAllMemos) {
      const allMemos = JSON.parse(jsonAllMemos);
      setAllMemos(allMemos);
    } else {
      setAllMemos([]);
    }
  }, []);

  const handleAddButton = () => {
    const createdNewMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    saveStorage([...allMemos, createdNewMemo]);
    openMemoForm(createdNewMemo, "new");
  };

  const handleEditButton = () => {
    if (text === null || text === undefined || text.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }
    const targetMemo = allMemos.find((memo) => memo.id === targetId);
    const updatedMemos = allMemos.map((memo) =>
      memo.id === targetId ? { ...targetMemo, content: text } : memo,
    );

    saveStorage(updatedMemos);
    reset("index");
  };

  const handleDeleteButton = () => {
    const oneLessMemos = allMemos.filter((memo) => memo.id !== targetId);

    saveStorage(oneLessMemos);
    reset("index");
  };

  const handleClickingMemoRow = (id) => {
    const targetMemo = allMemos.find((memo) => memo.id === id);

    openMemoForm(targetMemo, "edit");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // for DRY functions
  const openMemoForm = (memo, mode) => {
    setText(memo.content);
    setTargetId(memo.id);
    setMode(mode);
  };

  const saveStorage = (memos) => {
    setAllMemos(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const reset = (mode) => {
    setText("");
    setTargetId(null);
    setMode(mode);
  };

  return (
    <div>
      <div className="main-container">
        <MemoList
          allMemos={allMemos}
          onClickMemo={handleClickingMemoRow}
          targetId={targetId}
        />
        <AddButton onClickAdd={handleAddButton} mode={mode} />
      </div>
      <div className="form-container">
        {mode !== "index" && (
          <MemoForm
            text={text}
            onClickEdit={handleEditButton}
            onClickDelete={handleDeleteButton}
            onChangeText={handleTextChange}
          />
        )}
      </div>
    </div>
  );
}
