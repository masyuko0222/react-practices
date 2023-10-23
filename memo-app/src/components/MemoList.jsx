export default function MemoList({ memos }) {
  return (
    <div>
      {memos.map((memo) => (
        <MemoRow key={memo.id} title={memo.content.split("\n")[0].trim()} />
      ))}
    </div>
  );
}

const MemoRow = ({title}) => {
  return <p>{title}</p>
}
