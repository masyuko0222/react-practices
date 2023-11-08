export default function AddButton({ onClickAdd, mode }) {
  const color = mode === "new" ? "black" : "blue";

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
