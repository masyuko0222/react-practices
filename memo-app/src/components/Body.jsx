import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body() {
  const [memos, setMemos] = useState([]);
  const [mode, setMode] = useState("index");
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //Effect。初回レンダーときのみ実行。
  useEffect(() => {
    const storagedMemos = localStorage.getItem("memos");

    if (storagedMemos) {
      const parsedMemos = JSON.parse(storagedMemos);
      setMemos(parsedMemos);
    } else {
      setMemos([]);
    }
  }, []);

  // イベントハンドラ。"+", "編集", "削除"ボタン。
  const handleAddButton = () => {
    const newMemo = { id: crypto.randomUUID(), content: "新規メモ" };
    const nextMemos = [...memos, newMemo];

    save(nextMemos);
    edit(newMemo);
  };

  const handleEditButton = () => {
    const selectedMemo = memos.find((memo) => memo.id === selectedId);
    const updatedMemo = { ...selectedMemo, content: text };

    const updatedMemos = memos.map((memo) =>
      memo.id === selectedId ? updatedMemo : memo
    );

    // 編集ボタンだけどやってることは保存。保存ボタンの方が良いかも
    save(updatedMemos);
    renderIndex();
  };

  const handleDeleteButton = () => {
    const memosAfterDeletion = memos.filter((memo) => memo.id !== selectedId);

    save(memosAfterDeletion);
    renderIndex();
  };

  const handleClickingMemoRow = (id) => {
    const selectedMemo = memos.find((memo) => memo.id === id);

    edit(selectedMemo);
  };

  const handleTextChange = (e) => {
    // 副作用を伴うので、直接渡さずイベントハンドラとして制御する
    setText(e.target.value);
  };

  // DRYにするための関数たち
  const edit = (memo) => {
    setText(memo.content);
    setSelectedId(memo.id);
    setMode("edit");
  };

  const save = (memos) => {
    setMemos(memos);
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const renderIndex = () => {
    setText("");
    setSelectedId(null);
    setMode("index");
  };

  // コンポーネント戻り値
  return (
    <div>
      <MemoList memos={memos} onClickMemo={handleClickingMemoRow} />
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
