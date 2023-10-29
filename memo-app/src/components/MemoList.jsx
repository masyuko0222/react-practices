export default function MemoList({ memoIndex, onClickMemo }) {
  return (
    <div>
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
      onClick={() => {
        onClickMemo(id);
      }}
    >
      {title}
    </p>
  );
};
