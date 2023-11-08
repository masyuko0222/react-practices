export default function MemoForm({
  text,
  onClickEdit,
  onClickDelete,
  onChangeText,
}) {
  return (
    <div>
      <TextArea text={text} onChangeText={onChangeText} />
      <div className="form-container__buttons">
        <EditButton onClickEdit={onClickEdit} />
        <DeleteButton onClickDelete={onClickDelete} />
      </div>
    </div>
  );
}

const TextArea = ({ text, onChangeText }) => {
  return (
    <textarea
      className="form-container__text-area"
      placeholder="メモを入力"
      value={text}
      onChange={(e) => {
        onChangeText(e);
      }}
    ></textarea>
  );
};

const EditButton = ({ onClickEdit }) => {
  return (
    <button className="form-container__buttons--edit" onClick={onClickEdit}>
      編集
    </button>
  );
};

const DeleteButton = ({ onClickDelete }) => {
  return (
    <button className="form-container__buttons--delete" onClick={onClickDelete}>
      削除
    </button>
  );
};
