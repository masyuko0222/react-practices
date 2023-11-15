export default function AddButton({ onAddButtonClick, action }) {
  const color = action === "new" ? "black" : "blue";

  return (
    <button
      className="main-container--add-button"
      style={{ color }}
      onClick={onAddButtonClick}
    >
      +
    </button>
  );
}
