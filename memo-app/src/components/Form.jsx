export default function Form({
  text,
  onClickEdit,
  onClickDelete,
  onChangeText,
}) {
  return (
    <div>
      <TextArea text={text} onChangeText={onChangeText} />
      <EditButton onClickEdit={onClickEdit} />
      <DeleteButton onClickDelete={onClickDelete} />
    </div>
  );
}

const TextArea = ({ text, onChangeText }) => {
  return (
    <textarea
      placeholder="メモを入力"
      value={text}
      onChange={(e) => {
        onChangeText(e);
      }}
    ></textarea>
  );
};

const EditButton = ({ onClickEdit }) => {
  return <button onClick={onClickEdit}>編集</button>;
};

const DeleteButton = ({ onClickDelete }) => {
  return <button onClick={onClickDelete}>削除</button>;
};
