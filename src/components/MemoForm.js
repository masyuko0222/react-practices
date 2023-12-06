import { useAuthStatus } from "../hook/useAuthStatus";

export default function MemoForm({
  formText,
  setFormText,
  onEditButtonClick,
  onDeleteButtonClick,
}) {
  const { isAuthenticated } = useAuthStatus();

  return (
    <div>
      <FormTextArea
        formText={formText}
        setFormText={setFormText}
        isAuthenticated={isAuthenticated}
      />
      {isAuthenticated && (
        <div className="form-container__buttons">
          <EditButton onEditButtonClick={onEditButtonClick} />
          <DeleteButton onDeleteButtonClick={onDeleteButtonClick} />
        </div>
      )}
    </div>
  );
}

const FormTextArea = ({ formText, setFormText, isAuthenticated }) => {
  const handleTextChange = (e) => {
    if (isAuthenticated) {
      setFormText(e.target.value);
    }
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
