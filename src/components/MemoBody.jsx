import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import MemoForm from "./MemoForm";

export default function MemoBody({ mode, setMode }) {
  const [allMemos, setAllMemos] = useState([]);
  const [text, setText] = useState("");
  const [editingMemo, setEditingMemo] = useState({});

  useEffect(() => {
    const jsonAllMemos = localStorage.getItem("memos");

    if (jsonAllMemos) {
      setAllMemos(JSON.parse(jsonAllMemos));
    } else {
      setAllMemos([]);
    }
  }, []);

  const handleAddButtonClick = () => {
    const createdNewMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    saveStorage([...allMemos, createdNewMemo]);
    openMemoForm(createdNewMemo, "new");
  };

  const handleEditButtonClick = () => {
    if (text === null || text === undefined || text.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }

    const updatedMemos = allMemos.map((memo) =>
      memo.id === editingMemo.id ? { ...editingMemo, content: text } : memo
    );

    saveStorage(updatedMemos);
    reset("index");
  };

  const handleDeleteButtonClick = () => {
    const oneLessMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);

    saveStorage(oneLessMemos);
    reset("index");
  };

  const handleMemoRowClick = (id) => {
    const clickedMemo = allMemos.find((memo) => id === memo.id);
    openMemoForm(clickedMemo, "edit");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // for DRY functions
  const openMemoForm = (memo, mode) => {
    setEditingMemo(memo);
    setText(memo.content);
    setMode(mode);
  };

  const saveStorage = (memos) => {
    setAllMemos(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const reset = (mode) => {
    setText("");
    setMode(mode);
  };

  return (
    <div>
      <div className="main-container">
        <MemoList allMemos={allMemos} onMemoRowClick={handleMemoRowClick} />
        <AddButton onClickAdd={handleAddButtonClick} mode={mode} />
      </div>
      <div className="form-container">
        {mode !== "index" && (
          <MemoForm
            text={text}
            onEditButtonClick={handleEditButtonClick}
            onDeleteButtonClick={handleDeleteButtonClick}
            onChangeText={handleTextChange}
          />
        )}
      </div>
    </div>
  );
}
