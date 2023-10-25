export default function Form({ text, setText, handleEditButton }) {
  return (
    <div>
      <TextArea text={text} setText={setText} />
      <EditButton handleEditButton={handleEditButton} />
      <DeleteButton />
    </div>
  );
}

const TextArea = ({ text, setText }) => {
  return (
    <textarea
      placeholder="メモを入力"
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
};

const EditButton = ({ handleEditButton }) => {
  return <button onClick={handleEditButton}>編集</button>;
};

const DeleteButton = () => {
  return <button>削除</button>;
};
