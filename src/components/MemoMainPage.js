import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddNewMemoButton from "./AddNewMemoButton";
import MemoForm from "./MemoForm";

export default function MemoMainPage({ action, setAction }) {
  const [allMemos, setAllMemos] = useState([]);
  const [formText, setFormText] = useState("");
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    const allMemosJson = localStorage.getItem("memos");

    // If storage does not have "memos", return value is null.
    if (allMemosJson === null) return;

    try {
      setAllMemos(JSON.parse(allMemosJson));
    } catch (error) {
      // Private browser may raise an exception.
      console.error(error.message)
    }
  }, []);

  // Event Handlers
  const handleAddNewMemoButtonClick = () => {
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    const nextMemos = [...allMemos, newMemo]
    setAllMemos(nextMemos);
    localStorage.setItem("memos", JSON.stringify(nextMemos));
    openMemoForm(newMemo, "new");
  };

  const handleEditButtonClick = () => {
    if (formText === null || formText === undefined || formText.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }

    const updatedMemos = allMemos.map((memo) =>
      memo.id === editingMemo.id ? { ...memo, content: formText } : memo,
    );

    setAllMemos(updatedMemos);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
    resetPage("index");
  };

  const handleDeleteButtonClick = () => {
    const oneLessMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);

    setAllMemos(oneLessMemos);
    localStorage.setItem("memos", JSON.stringify(oneLessMemos));
    resetPage("index");
  };

  const handleMemoTitleClick = (clickedMemo) => {
    const memo = allMemos.find((memo) => clickedMemo.id === memo.id);
    openMemoForm(memo, "edit");
  };

  // for DRY functions
  const openMemoForm = (memo, action) => {
    setEditingMemo(memo);
    setFormText(memo.content);
    setAction(action);
  };

  const resetPage = (action) => {
    setFormText("");
    setEditingMemo({});
    setAction(action);
  };

  return (
    <div>
      <div className="main-container">
        <MemoList
          allMemos={allMemos}
          editingMemo={editingMemo}
          onMemoTitleClick={handleMemoTitleClick}
        />
        <AddNewMemoButton onAddNewMemoButtonClick={handleAddNewMemoButtonClick} action={action} />
      </div>
      <div className="form-container">
        {action !== "index" && (
          <MemoForm
            formText={formText}
            setFormText={setFormText}
            onEditButtonClick={handleEditButtonClick}
            onDeleteButtonClick={handleDeleteButtonClick}
          />
        )}
      </div>
    </div>
  );
}
