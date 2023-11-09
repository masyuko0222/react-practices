export default function MemoList({ allMemos, onMemoRowClick }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoRow key={memo.id} memo={memo} onMemoRowClick={onMemoRowClick} />
      ))}
    </div>
  );
}

const MemoRow = ({ memo, onMemoRowClick }) => {
  //const color = isTarget ? "black" : "blue";

  return (
    <p
      className="main-container__memo-list--title"
      onClick={() => {
        onMemoRowClick(memo.id);
      }}
    >
      {memo.content.split("\n")[0].trim()}
    </p>
  );
};
