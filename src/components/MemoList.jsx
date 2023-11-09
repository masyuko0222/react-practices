export default function MemoList({ allMemos, onMemoRowClick, targetId }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoRow
          key={memo.id}
          id={memo.id}
          title={memo.content.split("\n")[0].trim()}
          onMemoRowClick={onMemoRowClick}
          isTarget={memo.id === targetId}
        />
      ))}
    </div>
  );
}

const MemoRow = ({ id, title, onMemoRowClick, isTarget }) => {
  const color = isTarget ? "black" : "blue";

  return (
    <p
      style={{ color }}
      className="main-container__memo-list--title"
      onClick={() => {
        onMemoRowClick(id);
      }}
    >
      {title}
    </p>
  );
};
