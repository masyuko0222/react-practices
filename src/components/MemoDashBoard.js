import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddNewMemoButton from "./AddNewMemoButton";
import MemoForm from "./MemoForm";

export default function MemoDashBoard({ action, setAction }) {
  const initialMemos = () => {
    try {
      const allMemosJson = localStorage.getItem("memos");
      const initialMemos =
        // If not exist "memos" key, return value is null.
        allMemosJson === null ? [] : JSON.parse(allMemosJson);
      return initialMemos;
    } catch (err) {
      // Private browser may raise an exception.
      if (err instanceof Error) {
        console.error(err);
      } else {
        throw err;
      }
    }
  };

  const [allMemos, setAllMemos] = useState(initialMemos);
  const [formText, setFormText] = useState("");
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("memos", JSON.stringify(allMemos));
    } catch (error) {
      // If storage capacity is full, setItem raises an exception.
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        throw error;
      }
    }
  }, [allMemos]);

  // Event Handlers
  const handleAddNewMemoButtonClick = () => {
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    setAllMemos([...allMemos, newMemo]);
    openMemoForm(newMemo, "new");
  };

  const handleEditButtonClick = () => {
    if (formText.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }

    const updatedMemos = allMemos.map((memo) =>
      memo.id === editingMemo.id ? { ...memo, content: formText } : memo,
    );

    setAllMemos(updatedMemos);
    resetPage("index");
  };

  const handleDeleteButtonClick = () => {
    const remainingMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);

    setAllMemos(remainingMemos);
    resetPage("index");
  };

  const handleMemoTitleClick = (clickedMemo) => {
    const memo = allMemos.find((memo) => memo.id === clickedMemo.id);
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
        <AddNewMemoButton
          action={action}
          onAddNewMemoButtonClick={handleAddNewMemoButtonClick}
        />
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
