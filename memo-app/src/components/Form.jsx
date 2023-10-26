export default function Form({
  text,
  setText,
  handleEditButton,
  handleDeleteButton,
}) {
  return (
    <div>
      <TextArea text={text} setText={setText} />
      <EditButton handleEditButton={handleEditButton} />
      <DeleteButton handleDeleteButton={handleDeleteButton} />
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

const DeleteButton = ({ handleDeleteButton }) => {
  return <button onClick={handleDeleteButton}>削除</button>;
};
