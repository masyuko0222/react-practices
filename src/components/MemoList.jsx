export default function MemoList({ allMemos, onClickMemo, targetId }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoRow
          key={memo.id}
          id={memo.id}
          title={memo.content.split("\n")[0].trim()}
          onClickMemo={onClickMemo}
          isTarget={memo.id === targetId}
        />
      ))}
    </div>
  );
}

const MemoRow = ({ id, title, onClickMemo, isTarget }) => {
  const color = isTarget ? "black" : "blue";

  return (
    <p
      style={{ color }}
      className="main-container__memo-list--title"
      onClick={() => {
        onClickMemo(id);
      }}
    >
      {title}
    </p>
  );
};
