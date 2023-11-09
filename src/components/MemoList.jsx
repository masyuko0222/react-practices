export default function MemoList({ allMemos, onMemoRowClick }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoRow
          key={memo.id}
          id={memo.id}
          title={memo.content.split("\n")[0].trim()}
          onMemoRowClick={onMemoRowClick}
        />
      ))}
    </div>
  );
}

const MemoRow = ({ id, title, onMemoRowClick }) => {
  //const color = isTarget ? "black" : "blue";

  return (
    <p
      className="main-container__memo-list--title"
      onClick={() => {
        onMemoRowClick(id);
      }}
    >
      {title}
    </p>
  );
};
