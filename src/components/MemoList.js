export default function MemoList({ allMemos, onMemoTitleClick, editingMemo }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoTitle
          key={memo.id}
          memo={memo}
          onMemoTitleClick={onMemoTitleClick}
          editingMemo={editingMemo}
        />
      ))}
    </div>
  );
}

const MemoTitle = ({ memo, onMemoTitleClick, editingMemo }) => {
  const color = memo.id === editingMemo.id ? "black" : "blue";

  return (
    <p
      className="main-container__memo-list--title"
      style={{ color }}
      onClick={() => {
        onMemoTitleClick(memo.id);
      }}
    >
      {memo.content.split("\n")[0].trim()}
    </p>
  );
};
