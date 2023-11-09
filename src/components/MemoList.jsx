export default function MemoList({ allMemos, onMemoTitleClick }) {
  return (
    <div className="main-container__memo-list">
      {allMemos.map((memo) => (
        <MemoTitle
          key={memo.id}
          memo={memo}
          onMemoTitleClick={onMemoTitleClick}
        />
      ))}
    </div>
  );
}

const MemoTitle = ({ memo, onMemoTitleClick }) => {
  return (
    <p
      className="main-container__memo-list--title"
      onClick={() => {
        onMemoTitleClick(memo.id);
      }}
    >
      {memo.content.split("\n")[0].trim()}
    </p>
  );
};
