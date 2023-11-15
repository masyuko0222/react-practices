import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import MemoForm from "./MemoForm";

export default function MemoMainPage({ action, setAction }) {
  const [allMemos, setAllMemos] = useState([]);
  const [formText, setFormText] = useState("");
  const [editingMemo, setEditingMemo] = useState({});

  useEffect(() => {
    const allMemosJson = localStorage.getItem("memos");

    if (allMemosJson) {
      setAllMemos(JSON.parse(allMemosJson));
    } else {
      setAllMemos([]);
    }
  }, []);

  // Ivent Handlers
  const handleAddButtonClick = () => {
    const createdNewMemo = { id: crypto.randomUUID(), content: "新規メモ" };

    saveStorage([...allMemos, createdNewMemo]);
    openMemoForm(createdNewMemo, "new");
  };

  const handleEditButtonClick = () => {
    if (formText === null || formText === undefined || formText.trim() === "") {
      alert("保存するメモの内容を書いてください。");
      return;
    }

    const updatedMemos = allMemos.map((memo) =>
      memo.id === editingMemo.id ? { ...editingMemo, content: formText } : memo,
    );

    saveStorage(updatedMemos);
    render("index");
  };

  const handleDeleteButtonClick = () => {
    const oneLessMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);

    saveStorage(oneLessMemos);
    render("index");
  };

  const handleMemoTitleClick = (id) => {
    const clickedMemo = allMemos.find((memo) => id === memo.id);
    openMemoForm(clickedMemo, "edit");
  };

  // for DRY functions
  const openMemoForm = (memo, action) => {
    setEditingMemo(memo);
    setFormText(memo.content);
    setAction(action);
  };

  const saveStorage = (memos) => {
    setAllMemos(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const render = (action) => {
    setFormText("");
    setEditingMemo({});
    setAction(action);
  };

  return (
    <div>
      <div className="main-container">
        <MemoList
          allMemos={allMemos}
          onMemoTitleClick={handleMemoTitleClick}
          editingMemo={editingMemo}
        />
        <AddButton onAddButtonClick={handleAddButtonClick} action={action} />
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
