export default function MemoList({ memos, handleClickingMemoRow }) {
  return (
    <div>
      {memos.map((memo) => (
        <MemoRow
          key={memo.id}
          id={memo.id}
          title={memo.content.split("\n")[0].trim()}
          handleClickingMemoRow={handleClickingMemoRow}
        />
      ))}
    </div>
  );
}

const MemoRow = ({ id, title, handleClickingMemoRow }) => {
  return (
    <p
      onClick={() => {
        handleClickingMemoRow(id);
      }}
    >
      {title}
    </p>
  );
};
