export default function MemoForm({
  text,
  onEditButtonClick,
  onDeleteButtonClick,
  onChangeText,
}) {
  return (
    <div>
      <TextArea text={text} onChangeText={onChangeText} />
      <div className="form-container__buttons">
        <EditButton onEditButtonClick={onEditButtonClick} />
        <DeleteButton onDeleteButtonClick={onDeleteButtonClick} />
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

const EditButton = ({ onEditButtonClick }) => {
  return (
    <button className="form-container__buttons--edit" onClick={onEditButtonClick}>
      編集
    </button>
  );
};

const DeleteButton = ({ onDeleteButtonClick }) => {
  return (
    <button className="form-container__buttons--delete" onClick={onDeleteButtonClick}>
      削除
    </button>
  );
};
