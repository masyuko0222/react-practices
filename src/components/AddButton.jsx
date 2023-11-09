export default function AddButton({ onClickAdd, action }) {
  const color = action === "new" ? "black" : "blue";

  return (
    <button
      className="main-container--add-button"
      style={{ color: color }}
      onClick={() => {
        onClickAdd();
      }}
    >
      +
    </button>
  );
}
