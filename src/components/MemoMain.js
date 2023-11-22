import { useContext, useEffect, useState } from "react";
import { AuthStatusContext } from "../context/AuthStatusContext";
import {
  MemoList,
  AddNewMemoButton,
  MemoForm,
  SwitchAuthStatusButton,
} from "./index";

export default function MemoMain({ action, setAction }) {
  const { isLoggedIn } = useContext(AuthStatusContext)
  const [allMemos, setAllMemos] = useState([]);
  const [formText, setFormText] = useState("");
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    const allMemosJson = localStorage.getItem("memos");
    if (allMemosJson === null) return; // If storage does not have "memos", return value is null.

    try {
      setAllMemos(JSON.parse(allMemosJson));
    } catch (error) {
      console.error(error.message);  // Private browser may raise an exception
    }
  }, []);

  ///////////////////////
  //** Event handlers **/
  ///////////////////////
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
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
    resetPage("index");
  };

  const handleDeleteButtonClick = () => {
    const remainingMemos = allMemos.filter(
      (memo) => memo.id !== editingMemo.id,
    );

    setAllMemos(remainingMemos);
    localStorage.setItem("memos", JSON.stringify(remainingMemos));
    resetPage("index");
  };

  const handleMemoTitleClick = (clickedMemo) => {
    const memo = allMemos.find((memo) => memo.id === clickedMemo.id);
    openMemoForm(memo, "edit");
  };

  ////////////////
  //** For DRY **/
  ////////////////
  const openMemoForm = (memo, action) => {
    setEditingMemo(memo);
    setFormText(memo.content);
    setAction(action);
  };

  const resetPage = (action) => {
    setFormText("");
    setEditingMemo(null);
    setAction(action);
  };

  //////////////////
  //** Component **/
  //////////////////
  return (
    <div>
      <div className="main-container">
        <MemoList
          allMemos={allMemos}
          editingMemo={editingMemo}
          onMemoTitleClick={handleMemoTitleClick}
        />
        { isLoggedIn &&
          <AddNewMemoButton
            action={action}
            onAddNewMemoButtonClick={handleAddNewMemoButtonClick}
          />
        }
        <SwitchAuthStatusButton />
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
