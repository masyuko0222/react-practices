export default function MemoForm({
  formText,
  setFormText,
  onEditButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <div>
      <TextArea formText={formText} setFormText={setFormText} />
      <div className="form-container__buttons">
        <EditButton onEditButtonClick={onEditButtonClick} />
        <DeleteButton onDeleteButtonClick={onDeleteButtonClick} />
      </div>
    </div>
  );
}

const TextArea = ({ formText, setFormText }) => {
  const handleTextChange = (e) => {
    setFormText(e.target.value);
  };

  return (
    <textarea
      className="form-container__text-area"
      placeholder="メモを入力"
      value={formText}
      onChange={(e) => {
        handleTextChange(e);
      }}
    ></textarea>
  );
};

const EditButton = ({ onEditButtonClick }) => {
  return (
    <button
      className="form-container__buttons--edit"
      onClick={onEditButtonClick}
    >
      編集
    </button>
  );
};

const DeleteButton = ({ onDeleteButtonClick }) => {
  return (
    <button
      className="form-container__buttons--delete"
      onClick={onDeleteButtonClick}
    >
      削除
    </button>
  );
};
