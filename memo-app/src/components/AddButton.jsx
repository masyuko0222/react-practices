import { useState } from "react";

export default function AddButton({ onClickAdd, mode }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const color = mode === "new" ? "black" : "blue";

  return (
    <button
      className="main-container--add-button"
      style={{ color: color }}
      onClick={() => {
        setIsButtonClicked(!isButtonClicked);
        onClickAdd();
      }}
    >
      +
    </button>
  );
}
