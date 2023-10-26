export default function Form({ text, setText, onClickEdit, onClickDelete }) {
  return (
    <div>
      <TextArea text={text} setText={setText} />
      <EditButton onClickEdit={onClickEdit} />
      <DeleteButton onClickDelete={onClickDelete} />
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

const EditButton = ({ onClickEdit }) => {
  return <button onClick={onClickEdit}>編集</button>;
};

const DeleteButton = ({ onClickDelete }) => {
  return <button onClick={onClickDelete}>削除</button>;
};
