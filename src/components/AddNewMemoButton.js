export default function AddNewMemoButton({ onAddNewMemoButtonClick, action }) {
  const color = action === "new" ? "black" : "blue";

  return (
    <button
      className="main-container--add-button"
      style={{ color }}
      onClick={onAddNewMemoButtonClick}
    >
      +
    </button>
  );
}
