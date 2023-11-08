import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body({ mode, setMode }) {
  const [memoIndex, setMemoIndex] = useState([]);
  const [text, setText] = useState("");
  const [targetId, setTargetId] = useState(null);

  useEffect(() => {
    const jsonAllMemos = localStorage.getItem("memos");

    if (jsonAllMemos) {
      const allMemos = JSON.parse(jsonAllMemos);
      setMemoIndex(allMemos);
    } else {
      setMemoIndex([]);
    }
  }, []);

  const handleAddButton = () => {
    const createdNewMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    saveStorage([...memoIndex, createdNewMemo]);
    openForm(createdNewMemo, "new");
  };

  const handleEditButton = () => {
    if (text === null || text === undefined || text.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }
    const targetMemo = memoIndex.find((memo) => memo.id === targetId);
    const updatedMemos = memoIndex.map((memo) =>
      memo.id === targetId ? { ...targetMemo, content: text } : memo,
    );

    saveStorage(updatedMemos);
    reset("index");
  };

  const handleDeleteButton = () => {
    const oneLessMemos = memoIndex.filter((memo) => memo.id !== targetId);

    saveStorage(oneLessMemos);
    reset("index");
  };

  const handleClickingMemoRow = (id) => {
    const targetMemo = memoIndex.find((memo) => memo.id === id);

    openForm(targetMemo, "edit");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // for DRY functions
  const openForm = (memo, mode) => {
    setText(memo.content);
    setTargetId(memo.id);
    setMode(mode);
  };

  const saveStorage = (memos) => {
    setMemoIndex(memos);
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
          memoIndex={memoIndex}
          onClickMemo={handleClickingMemoRow}
          targetId={targetId}
        />
        <AddButton onClickAdd={handleAddButton} mode={mode} />
      </div>
      <div className="form-container">
        {mode !== "index" && (
          <Form
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
