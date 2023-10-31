export default function MemoList({ memoIndex, onClickMemo }) {
  return (
    <div className="main-container__memo-list">
      {memoIndex.map((memo) => (
        <MemoRow
          key={memo.id}
          id={memo.id}
          title={memo.content.split("\n")[0].trim()}
          onClickMemo={onClickMemo}
        />
      ))}
    </div>
  );
}

const MemoRow = ({ id, title, onClickMemo }) => {
  return (
    <p
      className="main-container__memo-list--title"
      onClick={() => {
        onClickMemo(id);
      }}
    >
      {title}
    </p>
  );
};
