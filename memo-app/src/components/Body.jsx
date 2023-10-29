import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body() {
  const [memoIndex, setMemoIndex] = useState([]);
  const [mode, setMode] = useState("index");
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const storagedMemos = localStorage.getItem("memos");

    if (storagedMemos) {
      const parsedMemos = JSON.parse(storagedMemos);
      setMemoIndex(parsedMemos);
    } else {
      setMemoIndex([]);
    }
  }, []);

  const handleAddButton = () => {
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };
    const nextMemos = [...memoIndex, newMemo];

    save(nextMemos);
    edit(newMemo);
  };

  const handleEditButton = () => {
    const selectedMemo = memoIndex.find((memo) => memo.id === selectedId);
    const updatedMemo = { ...selectedMemo, content: text };

    const updatedMemos = memoIndex.map((memo) =>
      memo.id === selectedId ? updatedMemo : memo
    );

    save(updatedMemos);
    renderIndex();
  };

  const handleDeleteButton = () => {
    const memosAfterDeletion = memoIndex.filter((memo) => memo.id !== selectedId);

    save(memosAfterDeletion);
    renderIndex();
  };

  const handleClickingMemoRow = (id) => {
    const selectedMemo = memoIndex.find((memo) => memo.id === id);

    edit(selectedMemo);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const edit = (memo) => {
    setText(memo.content);
    setSelectedId(memo.id);
    setMode("edit");
  };

  const save = (memos) => {
    setMemoIndex(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const renderIndex = () => {
    setText("");
    setSelectedId(null);
    setMode("index");
  };

  return (
    <div>
      <MemoList memoIndex={memoIndex} onClickMemo={handleClickingMemoRow} />
      <AddButton onClickAdd={handleAddButton} />
      {mode === "edit" && (
        <Form
          text={text}
          onClickEdit={handleEditButton}
          onClickDelete={handleDeleteButton}
          onChangeText={handleTextChange}
        />
      )}
    </div>
  );
}
